//Main Code
import * as React from "react";
import styles from "./Results.module.scss";
import type { IResultsProps } from "./IResultsProps";

import { getSP } from "./Spfx_sp.config";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import "select2/dist/css/select2.min.css"; // Import select2 CSS
import "select2"; // Import select2 JavaScript
import * as jQuery from "jquery";
const $ = jQuery;

// import { spfi } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

interface IResultsState {
  countries: any[];
  cities: any[];
  universities: any[];
  programs: any[];
  selectedCountry: string;
  selectedCity: string;
  selectedUniversity: string;
  selectedProgram: string;
  selectedExpense: string;
  items: any[];
  includeIvyLeague: boolean;
  STEMcourse: boolean;
  shortlistedItems: { id: string; company: string; date: string }[];
  selectedUniversityType: string;
  selectedTestType: string;
  score: string;
  convertedSATScore: number | null;
  currentPage: number;
  itemsPerPage: number;
}

export default class Results extends React.Component<
  IResultsProps,
  IResultsState
> {
  private _sp: SPFI;

  constructor(props: IResultsProps) {
    super(props);
    this.state = {
      countries: [],
      cities: [],
      universities: [],
      programs: [],
      selectedCountry: "",
      selectedCity: "",
      selectedUniversity: "",
      selectedProgram: "",
      items: [],
      includeIvyLeague: false,
      STEMcourse: false,
      shortlistedItems: [],
      selectedExpense: "",
      selectedUniversityType: "",
      selectedTestType: "",
      score: "",
      convertedSATScore: null,
      currentPage: 1,
      itemsPerPage: 5,
    };
    this._sp = getSP();
  }

  public componentDidMount() {
    this.fetchCountriesFromSharePointList();
    this.getAllItems(1, 5);
    $(document).ready(() => {
      $(".country-select").select2(); // Apply select2 to the Country dropdown (if available
      $(".city-select").select2(); // Apply select2 to the City dropdown
      $(".university-select").select2(); // Apply select2 to the University dropdown
      $(".program-select").select2(); // Apply select2 to the Program dropdown
    });
  }

  //@ts-ignore
  private convertScoreToSAT = () => {
    const score = parseFloat(this.state.score);
    if (!isNaN(score)) {
      let satScore = 0;
      if (this.state.selectedTestType === "SAT") {
        satScore = score;
      } else if (this.state.selectedTestType === "TOEFL") {
        satScore = this.convertTOEFLToSAT(score);
      } else if (this.state.selectedTestType === "GRE") {
        satScore = this.convertGREToSAT(score);
      } else if (this.state.selectedTestType === "IELTS") {
        satScore = this.convertIELTSToSAT(score);
      } else if (this.state.selectedTestType === "ACT") {
        satScore = this.convertACTToSAT(score);
      }

      this.setState({ convertedSATScore: satScore }); // Update state with the converted SAT score
    } else {
      alert("Please enter a valid score.");
    }
  };

  private convertTOEFLToSAT = (toeflScore: number): number => {
    // Conversion logic from TOEFL to SAT score
    // Example conversion formula, adjust as needed
    return Math.round(toeflScore * 1.2);
  };

  private convertGREToSAT = (greScore: number): number => {
    // Conversion logic from GRE to SAT score
    // Example conversion formula, adjust as needed
    return Math.round(greScore / 2);
  };

  private convertIELTSToSAT = (ieltsScore: number): number => {
    // Conversion logic from IELTS to SAT score
    // Example conversion formula, adjust as needed
    return Math.round(ieltsScore * 10);
  };

  private convertACTToSAT = (actScore: number): number => {
    // Conversion logic from ACT to SAT score
    // Example conversion formula, adjust as needed
    return Math.round(actScore * 1.2);
  };

  public render(): React.ReactElement<IResultsProps> {
    const { currentPage, itemsPerPage } = this.state;
    // const totalPages = Math.ceil(Total Items / itemsPerPage);
    const totalPages = Math.ceil(14 / itemsPerPage);
    return (
      <div className={styles.spfxCrudPnp}>
        <div className="results">
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>All Item</div>
            <div id="allItems"></div>
          </div>
          {/* Pagination controls */}
          <div
            className={styles.itemField}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              onClick={() => this.getAllItems(currentPage - 1, itemsPerPage)}
              disabled={currentPage === 1}
              style={{
                backgroundColor: "#0078d4",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "5px 10px",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <span
              style={{ margin: "0 10px" }}
            >{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => this.getAllItems(currentPage + 1, itemsPerPage)}
              disabled={currentPage === totalPages}
              style={{
                backgroundColor: "#0078d4",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "5px 10px",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  //@ts-ignore
  private handleTestTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ selectedTestType: event.target.value });
  };

  //@ts-ignore
  private handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ score: event.target.value });
  };

  private getShortlistedItems = async () => {
    try {
      // Fetch items from the Shortlisted list
      const items: any[] = await this._sp.web.lists
        .getByTitle("Shortlisted")
        .items.select("ID", "Title", "University", "username")(); // Include the "ID" field

      // Get the current user's title (assuming you have access to it)
      const user = await this._sp.web.currentUser();
      const currentUserTitle = user.Title; // Replace with the actual current user's title

      // Generate HTML for the table
      let html = `
<table>
<tr>
  <th>Title</th>
  <th>University</th>
  <th>Action</th>
</tr>`;

      items.forEach((item) => {
        // Check if the item's Username matches the current user's title
        if (item.username === currentUserTitle) {
          html += `
<tr>
  <td>${item.Title}</td>
  <td>${item.University}</td>
  <td>
    <button class="delete-button" data-id="${item.ID}">Delete</button>
    <button class="apply-button" data-id="${item.ID}">Apply</button>
  </td>
</tr>`;
        }
      });

      html += `</table>`;

      // Display the table inside the specified <div>
      const allItemsElement = document.getElementById("allItems");
      if (allItemsElement) {
        allItemsElement.innerHTML = html;

        // Add event listeners to delete and apply buttons
        document.querySelectorAll(".delete-button").forEach((button) => {
          button.addEventListener("click", async (event) => {
            const target = event.target as HTMLElement;
            const id = target.dataset.id;
            if (id) {
              await this.deleteItemFromShortlist(id);
              alert("Item Deleted!");
            } else {
              console.error("ID is missing or undefined from button dataset.");
            }
          });
        });

        document.querySelectorAll(".apply-button").forEach((button) => {
          button.addEventListener("click", async (event) => {
            const target = event.target as HTMLElement;
            const id = target.dataset.id;
            if (id) {
              await this.applyItem(id);
              alert("Item Applied!");
            } else {
              console.error("ID is missing or undefined from button dataset.");
            }
          });
        });
      } else {
        console.error("Element with id 'allItems' not found.");
      }
    } catch (error) {
      console.error("Error fetching shortlisted items:", error);
      // Optionally, display an error message or handle the error in another way
    }
  };

  private applyItem = async (id: string) => {
    try {
      // Convert the id to a number
      const itemId = parseInt(id, 10);

      // Get the item from the "Shortlisted" list
      const item = await this._sp.web.lists
        .getByTitle("Shortlisted")
        .items.getById(itemId)();

      // Add the item to the "ApplicationList"
      await this._sp.web.lists.getByTitle("ApplicationList").items.add({
        Title: item.ID.toString(),
        username: item.username,
        UniversityName: item.University,
      });
      console.log(`Item with ID: ${id} applied to ApplicationList.`);
    } catch (error) {
      console.error(`Error applying item with ID: ${id}`, error);
    }
  };

  private deleteItemFromShortlist = async (id: string) => {
    try {
      // Convert the id to a number
      const itemId = parseInt(id, 10);

      // Delete the item from the "Shortlisted" list
      await this._sp.web.lists
        .getByTitle("Shortlisted")
        .items.getById(itemId)
        .delete();
      console.log(`Item with ID: ${id} deleted from Shortlisted list.`);
      await this.getShortlistedItems();
    } catch (error) {
      console.error(`Error deleting item with ID: ${id}`, error);
    }
  };

  handleExpenseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedExpense: event.target.value });
  };
  //@ts-ignore
  private handleIvyLeagueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ includeIvyLeague: event.target.checked }, () => {
      // After updating the state, re-render the filtered items
      this.getAllItems(1, 5);
      console.log("Include Ivy League:", this.state.includeIvyLeague);
    });
  };
  //@ts-ignore
  private handleSTEMcourseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ STEMcourse: event.target.checked }, () => {
      this.getAllItems(1, 5);
      console.log("Has STEM Course:", this.state.STEMcourse);
    });
  };

  private async fetchCountriesFromSharePointList() {
    try {
      const countries: any[] = await this._sp.web.lists
        .getByTitle("Country")
        .items.select("ID", "Title")();
      this.setState({ countries });
    } catch (e) {
      console.log(e);
    }
  }

  private async fetchCitiesFromSharePointList() {
    try {
      const cities: any[] = await this._sp.web.lists
        .getByTitle("City")
        .items.select("ID", "Title")();
      this.setState({ cities });
    } catch (e) {
      console.error(e);
    }
  }

  private async fetchUniversitiesFromSharePointList(City: string) {
    try {
      const universities: any[] = await this._sp.web.lists
        .getByTitle("University")
        .items.filter(`City eq '${City}'`)
        .select("ID", "Title")();
      this.setState({ universities });
    } catch (e) {
      console.error(e);
    }
  }

  private async fetchProgramsFromSharePointList(selectedUniversity: string) {
    try {
      const programs: any[] = await this._sp.web.lists
        .getByTitle("Program")
        .items.select("ID", "Title", "University/Title")
        .expand("University")
        .filter(`University/Title eq '${selectedUniversity}'`)();
      this.setState({ programs });
    } catch (error) {
      console.error("Error fetching programs from SharePoint:", error);
    }
  }
  //@ts-ignore
  private handleCountryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCountry = event.target.value;
    this.setState({
      selectedCountry,
      selectedCity: "",
      selectedUniversity: "",
      selectedProgram: "",
      cities: [],
      universities: [],
      programs: [],
    });
    if (selectedCountry) {
      this.fetchCitiesFromSharePointList();
    }
  };
  //@ts-ignore
  private handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    this.setState({
      selectedCity,
      selectedUniversity: "",
      selectedProgram: "",
      universities: [],
      programs: [],
    });
    if (selectedCity) {
      this.fetchUniversitiesFromSharePointList(selectedCity);
    }
  };
  //@ts-ignore
  private handleUniversityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedUniversity = event.target.value;
    this.setState({ selectedUniversity, selectedProgram: "", programs: [] });
    if (selectedUniversity) {
      this.fetchProgramsFromSharePointList(selectedUniversity);
    }
  };
  //@ts-ignore
  private handleUniversityTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ selectedUniversityType: e.target.value });
  };
  //@ts-ignore
  private handleProgramChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ selectedProgram: event.target.value });
  };

  // private shortlistCourse = async () => {
  //   try {
  //     const { selectedUniversity, selectedProgram } = this.state;
  //     let program = selectedProgram || ""; // If no program selected, use blank value
  //     if (!selectedUniversity) {
  //       alert("Please select a University before shortlisting.");
  //       return;
  //     }

  //     // Get the current user
  //     const user = await this._sp.web.currentUser();
  //     console.log(`Current user: ${user.Title}`);

  //     // Add the item to the "Favourites" list with the titles and IDs
  //     await this._sp.web.lists.getByTitle("Favourites").items.add({
  //       Title: `Shortlisted ${selectedUniversity} - ${program}`,
  //       University: selectedUniversity,
  //       Program: program,
  //       username: user.Title, // Add the user's title to the item
  //     });

  //     alert("Course has been successfully shortlisted!");
  //   } catch (error) {
  //     console.error("Error shortlisting course:", error);
  //     alert("An error occurred while shortlisting the course.");
  //   }
  // };

  private getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  // @ts-ignore
  private shortlistUniversity = async (
    id: string,
    University: string,
    Program: string = ""
  ) => {
    try {
      const user = await this._sp.web.currentUser();
      const loginName = user.Title;
      const date = this.getCurrentDate();
      const MyItemUniq = `${loginName}${date}${id}${University}`;

      await this._sp.web.lists.getByTitle("Shortlisted").items.add({
        Title: `Shortlisted ${id}`,
        University: University,
        Program: Program,
        UniqueIdentifier: MyItemUniq,
        username: user.Title,
      });

      alert("University Shortlisted!");
    } catch (error) {
      console.error("Error shortlisting university:", error);
      alert("University already shortlisted.");
    }
  };

  // Filter By public and private
  // private getAllItems = async () => {

  //   try {
  //     const {
  //       selectedCountry,
  //       selectedCity,
  //       includeIvyLeague,
  //       STEMcourse,
  //       selectedExpense,
  //       selectedUniversityType,
  //     } = this.state;

  //     let filterQuery = "";

  //     if (selectedCountry) {
  //       filterQuery += `Country/Title eq '${selectedCountry}'`;
  //     }

  //     if (selectedCity) {
  //       filterQuery += filterQuery ? " and " : "";
  //       filterQuery += `City/Title eq '${selectedCity}'`;
  //     }

  //     if (includeIvyLeague) {
  //       filterQuery += filterQuery ? " and " : "";
  //       filterQuery += `Ivy eq 1`;
  //     }

  //     if (STEMcourse) {
  //       filterQuery += filterQuery ? " and " : "";
  //       filterQuery += `STEM eq 1`;
  //     }

  //     if (selectedExpense) {
  //       filterQuery += filterQuery ? " and " : "";
  //       filterQuery += `Expense eq '${selectedExpense}'`;
  //     }

  //     if (selectedUniversityType) {
  //       filterQuery += filterQuery ? " and " : "";
  //       filterQuery += `UniversityType eq '${selectedUniversityType}'`;
  //     }

  //     let items: any[];

  //     if (filterQuery) {
  //       items = await this._sp.web.lists
  //         .getByTitle("Display_Uni_List")
  //         .items.select(
  //           "ID",
  //           "University/Title",
  //           "City/Title",
  //           "Country/Title",
  //           "Program_M/Title",
  //           "Img_A",
  //           "Uni_links",
  //           "GlobalRanking",
  //           "SATscore"
  //         )
  //         .expand("Country", "City", "University", "Program_M")
  //         .filter(filterQuery)
  //         .orderBy("GlobalRanking", true)(); // true for ascending order
  //     } else {
  //       items = await this._sp.web.lists
  //         .getByTitle("Display_Uni_List")
  //         .items.select(
  //           "ID",
  //           "University/Title",
  //           "City/Title",
  //           "Country/Title",
  //           "Program_M/Title",
  //           "Img_A",
  //           "Uni_links",
  //           "GlobalRanking",
  //           "SATscore"
  //         )
  //         .expand("Country", "City", "University", "Program_M")
  //         .orderBy("GlobalRanking", true)(); // true for ascending order
  //     }

  //     console.log(items);

  //     // Rest of your code for rendering items
  //     let chanceOfAdmission = "N/A"; // Default value

  //     if (items.length > 0) {
  //       var html = `<style>
  //                 .tiles {
  //                   display: grid;
  //                   grid-template-columns: repeat(3, 1fr);
  //                   gap: 20px;
  //                 }
  //                 .tile {
  //                   position: relative;
  //                   border: 1px solid #ddd;
  //                   border-radius: 5px;
  //                   padding: 10px;
  //                   box-sizing: border-box;
  //                   text-align: center;
  //                 }
  //                 .tile-image {
  //                   width: 100%;
  //                   height: auto;
  //                   border-radius: 5px;
  //                   cursor: pointer;
  //                 }
  //                 .tile-title {
  //                   font-weight: bold;
  //                   margin-top: 5px;
  //                 }
  //                 .tile-ranking {
  //                   margin-top: 5px;
  //                 }
  //                 .shortlist-button {
  //                   background-color: #0078d4;
  //                   color: #fff;
  //                   border: none;
  //                   border-radius: 3px;
  //                   padding: 5px 10px;
  //                   cursor: pointer;
  //                 }
  //               </style>
  //               <div class="tiles">`;

  //       items.forEach((item, index) => {
  //         const universityTitle = item.University
  //           ? item.University.Title
  //           : "N/A";
  //         const imageUrl = item.Img_A ? item.Img_A.Url : "";
  //         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
  //         const globalRanking = item.GlobalRanking ? item.GlobalRanking : "N/A";
  //         let SATscore = "N/A";

  //         // Check if SATscore field exists and is a number
  //         if (item.SATscore && !isNaN(parseFloat(item.SATscore))) {
  //           SATscore = item.SATscore;
  //           // chanceOfAdmission = this.getChanceOfAdmission(
  //           //   1400,
  //           //   parseFloat(SATscore)
  //           // );
  //           let convertedSATScore =
  //             this.state.convertedSATScore !== null
  //               ? this.state.convertedSATScore.toString()
  //               : "0";
  //           chanceOfAdmission = this.getChanceOfAdmission(
  //             parseFloat(convertedSATScore),
  //             parseFloat(SATscore)
  //           );
  //           // chanceOfAdmission = this.getChanceOfAdmission(parseFloat(this.state.convertedSATScore), parseFloat(SATscore));
  //         }
  //         html += `
  //                   <div class="tile">
  //                     <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
  //                       <img src="${imageUrl}" alt="Image2" class="tile-image" />
  //                       <div class="tile-title">${universityTitle}</div>
  //                       <div class="tile-ranking">Rank: ${globalRanking}</div>
  //                       <div class="tile-eligibility">SAT Score: ${SATscore}</div>
  //                       <div class="tile-eligibility">Chance of Admission: ${chanceOfAdmission}</div>
  //           </a>
  //                     <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
  //                   </div>`;
  //       });

  //       html += `</div>`;
  //       const allItemsElement = document.getElementById("allItems");
  //       if (allItemsElement) {
  //         allItemsElement.innerHTML = html;

  //         // Add event listener to shortlist button
  //         document.querySelectorAll(".shortlist-button").forEach((button) => {
  //           button.addEventListener("click", async (event) => {
  //             const target = event.target as HTMLElement;
  //             const id = target.dataset.id;
  //             const university = target.dataset.university;
  //             let program = target.dataset.program || "";
  //             if (id && university) {
  //               await this.shortlistUniversity(id, university, program);
  //             } else {
  //               console.error(
  //                 "ID, university, or program is missing from button dataset."
  //               );
  //             }
  //           });
  //         });
  //       } else {
  //         console.error("Element with id 'allItems' not found.");
  //       }
  //     } else {
  //       this.undoRead();
  //       alert(`No items found.`);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     alert("An error occurred while fetching items.");
  //   }
  // };

  //With Pagination
  private getAllItems = async (pageNumber: number, itemsPerPage: number) => {
    try {
      const {
        selectedCountry,
        selectedCity,
        includeIvyLeague,
        STEMcourse,
        selectedExpense,
        selectedUniversityType,
      } = this.state;

      let filterQuery = "";

      if (selectedCountry) {
        filterQuery += `Country/Title eq '${selectedCountry}'`;
      }

      if (selectedCity) {
        filterQuery += filterQuery ? " and " : "";
        filterQuery += `City/Title eq '${selectedCity}'`;
      }

      if (includeIvyLeague) {
        filterQuery += filterQuery ? " and " : "";
        filterQuery += `Ivy eq 1`;
      }

      if (STEMcourse) {
        filterQuery += filterQuery ? " and " : "";
        filterQuery += `STEM eq 1`;
      }

      if (selectedExpense) {
        filterQuery += filterQuery ? " and " : "";
        filterQuery += `Expense eq '${selectedExpense}'`;
      }

      if (selectedUniversityType) {
        filterQuery += filterQuery ? " and " : "";
        filterQuery += `UniversityType eq '${selectedUniversityType}'`;
      }

      // Calculate skip and top values for pagination
      const skip = (pageNumber - 1) * itemsPerPage;
      const top = itemsPerPage;

      let items: any[];

      if (filterQuery) {
        items = await this._sp.web.lists
          .getByTitle("Display_Uni_List")
          .items.select(
            "ID",
            "University/Title",
            "City/Title",
            "Country/Title",
            "Program_M/Title",
            "Img_A",
            "Uni_links",
            "GlobalRanking",
            "SATscore"
          )
          .expand("Country", "City", "University", "Program_M")
          .filter(filterQuery)
          .orderBy("GlobalRanking", true)
          .top(top)
          .skip(skip)();
      } else {
        items = await this._sp.web.lists
          .getByTitle("Display_Uni_List")
          .items.select(
            "ID",
            "University/Title",
            "City/Title",
            "Country/Title",
            "Program_M/Title",
            "Img_A",
            "Uni_links",
            "GlobalRanking",
            "SATscore"
          )
          .expand("Country", "City", "University", "Program_M")
          .orderBy("GlobalRanking", true)
          .top(top)
          .skip(skip)();
      }

      console.log(items);

      // Update state with the fetched items and current page
      this.setState({ items, currentPage: pageNumber });

      // Rest of your code for rendering items
      let chanceOfAdmission = "N/A"; // Default value

      if (items.length > 0) {
        var html = `<style>
                    .tiles {
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      gap: 20px;
                    }
                    .tile {
                      position: relative;
                      border: 1px solid #ddd;
                      border-radius: 5px;
                      padding: 10px;
                      box-sizing: border-box;
                      text-align: center;
                    }
                    .tile-image {
                      width: 100%;
                      height: auto;
                      border-radius: 5px;
                      cursor: pointer;
                    }
                    .tile-title {
                      font-weight: bold;
                      margin-top: 5px;
                    }
                    .tile-ranking {
                      margin-top: 5px;
                    }
                    .shortlist-button {
                      background-color: #0078d4;
                      color: #fff;
                      border: none;
                      border-radius: 3px;
                      padding: 5px 10px;
                      cursor: pointer;
                    }
                  </style>
                  <div class="tiles">`;

        items.forEach((item, index) => {
          const universityTitle = item.University
            ? item.University.Title
            : "N/A";
          const imageUrl = item.Img_A ? item.Img_A.Url : "";
          const uniLink = item.Uni_links ? item.Uni_links.Url : "";
          const globalRanking = item.GlobalRanking ? item.GlobalRanking : "N/A";
          let SATscore = "N/A";

          // Check if SATscore field exists and is a number
          if (item.SATscore && !isNaN(parseFloat(item.SATscore))) {
            SATscore = item.SATscore;
            // chanceOfAdmission = this.getChanceOfAdmission(
            //   1400,
            //   parseFloat(SATscore)
            // );
            let convertedSATScore =
              this.state.convertedSATScore !== null
                ? this.state.convertedSATScore.toString()
                : "0";
            chanceOfAdmission = this.getChanceOfAdmission(
              parseFloat(convertedSATScore),
              parseFloat(SATscore)
            );
            // chanceOfAdmission = this.getChanceOfAdmission(parseFloat(this.state.convertedSATScore), parseFloat(SATscore));
          }
          html += `
                      <div class="tile">
                        <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
                          <img src="${imageUrl}" alt="Image2" class="tile-image" />
                          <div class="tile-title">${universityTitle}</div>
                          <div class="tile-ranking">Rank: ${globalRanking}</div>
                          <div class="tile-eligibility">SAT Score: ${SATscore}</div>
                          <div class="tile-eligibility">Chance of Admission: ${chanceOfAdmission}</div>
              </a>
                        <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
                      </div>`;
        });

        html += `</div>`;
        const allItemsElement = document.getElementById("allItems");
        if (allItemsElement) {
          allItemsElement.innerHTML = html;

          // Add event listener to shortlist button
          document.querySelectorAll(".shortlist-button").forEach((button) => {
            button.addEventListener("click", async (event) => {
              const target = event.target as HTMLElement;
              const id = target.dataset.id;
              const university = target.dataset.university;
              let program = target.dataset.program || "";
              if (id && university) {
                await this.shortlistUniversity(id, university, program);
              } else {
                console.error(
                  "ID, university, or program is missing from button dataset."
                );
              }
            });
          });
        } else {
          console.error("Element with id 'allItems' not found.");
        }
      } else {
        this.undoRead();
        alert(`No items found.`);
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred while fetching items.");
    }
  };

  private undoRead = () => {
    this.setState({ items: [] });
    const allItemsElement = document.getElementById("allItems");
    if (allItemsElement) {
      allItemsElement.innerHTML = "";
    } else {
      console.error("Element with id 'All Items' not found.");
    }
  };
  //@ts-ignore
  private getUniInfo = async () => {
    try {
      const { selectedUniversity } = this.state;
      const uni: any[] = await this._sp.web.lists
        .getByTitle("University")
        .items.filter(`Title eq '${selectedUniversity}'`)
        .select(
          "ID",
          "Title",
          "City",
          "Expense",
          "GlobalRank",
          "TotalEnrollment",
          "Undergraduates",
          "FinancialAid",
          "PellGrant",
          "StudentLoans",
          "AverageDebt",
          "Applicants",
          "Accepted",
          "Enrolled",
          "ReturningFreshmen",
          "Academics",
          "Social",
          "QualityOfLife",
          "Admission"
        )();

      if (uni.length > 0) {
        let html = `<table>`;
        for (const itemKey in uni[0]) {
          if (uni[0].hasOwnProperty(itemKey)) {
            let itemValue = uni[0][itemKey];
            if (itemValue === undefined || itemValue === null) {
              itemValue = "NA";
            }
            html += `<tr><td><strong>${itemKey}</strong></td><td>${itemValue}</td></tr>`;
          }
        }
        html += `</table>`;

        const allItemsElement = document.getElementById("allItems");
        if (allItemsElement) {
          allItemsElement.innerHTML = html;
        } else {
          console.error("Element with id 'allItems' not found.");
        }
      } else {
        alert(`No data found for the selected university.`);
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred while fetching the item.");
    }
  };
  //@ts-ignore
  private getProgInfo = async () => {
    try {
      const { selectedProgram } = this.state;
      const prog: any[] = await this._sp.web.lists
        .getByTitle("Program")
        .items.filter(`Title eq '${selectedProgram}'`)
        .select("ID", "Title", "Fees", "StemProgram")();
      if (prog.length > 0) {
        var html = `<div><strong>Program:</strong> ${prog[0].Title}</div>`;
        html += `<div><strong>Fees:</strong> ${prog[0]["Fees"]}</div>`;
        html += `<div><strong>STEM Program:</strong> ${prog[0].StemProgram}</div>`;
        const allItemsElement = document.getElementById("allItems");
        if (allItemsElement) {
          allItemsElement.innerHTML = html;
        } else {
          console.error("Element with id 'All Items' not found.");
        }
      } else {
        alert(`No data found for the selected program.`);
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred while fetching the item.");
    }
  };

  private getChanceOfAdmission(
    userScore: number,
    minEligibilityScore: number
  ): string {
    const scoreDifference = userScore - minEligibilityScore;
    if (scoreDifference < -50) {
      return "Very Low";
    } else if (scoreDifference < 0) {
      return "Low";
    } else if (scoreDifference < 50) {
      return "Medium";
    } else {
      return "High";
    }
  }

  // Assuming this is inside your component class
  // private calculateAndDisplayChanceOfAdmission = (userScore: number, minEligibilityScore: number) => {
  //   const chanceOfAdmission = this.getChanceOfAdmission(userScore, minEligibilityScore);
  //   console.log(chanceOfAdmission); // This will output the calculated chance of admission
  // };
}

// function getChanceOfAdmission(
//   userScore: number,
//   minEligibilityScore: number
// ): string {
//   const scoreDifference = userScore - minEligibilityScore;
//   if (scoreDifference < -50) {
//     return "Very Low";
//   } else if (scoreDifference < 0) {
//     return "Low";
//   } else if (scoreDifference < 50) {
//     return "Medium";
//   } else {
//     return "High";
//   }
// }

// const minEligibilityScore = 1200; // Assume this is the minimum eligibility score for a university
// const userScore = 214; // Assume this is the user's score

// const chanceOfAdmission = getChanceOfAdmission(userScore, minEligibilityScore);
// console.log(chanceOfAdmission); // This will output "High Chance"
