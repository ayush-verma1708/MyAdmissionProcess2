//Main Code
import * as React from "react";
import styles from "./DisplayElements.module.scss";
import type { IDisplayElementsProps } from "./IDisplayElementsProps";

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

interface IDisplayElementsState {
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
}

export default class DisplayElements extends React.Component<
  IDisplayElementsProps,
  IDisplayElementsState
> {
  private _sp: SPFI;

  constructor(props: IDisplayElementsProps) {
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
    };
    this._sp = getSP();
  }

  public componentDidMount() {
    this.fetchCountriesFromSharePointList();
    this.getAllItems();
    $(document).ready(() => {
      $(".country-select").select2(); // Apply select2 to the Country dropdown (if available
      $(".city-select").select2(); // Apply select2 to the City dropdown
      $(".university-select").select2(); // Apply select2 to the University dropdown
      $(".program-select").select2(); // Apply select2 to the Program dropdown
    });
  }

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

  public render(): React.ReactElement<IDisplayElementsProps> {
    return (
      <div className={styles.spfxCrudPnp}>
        <div className="Filters">
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>Test Type</div>
            <select
              value={this.state.selectedTestType}
              onChange={this.handleTestTypeChange}
            >
              <option value="">Select Test Type</option>
              <option value="SAT">SAT</option>
              <option value="GRE">GRE</option>
              <option value="TOEFL">TOEFL</option>
              <option value="IELTS">IELTS</option>
              <option value="ACT">ACT</option>
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>Score</div>
            <input
              type="text"
              value={this.state.score}
              onChange={this.handleScoreChange}
            />
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}></div>
            <button onClick={this.convertScoreToSAT}>Submit Score</button>
            {this.state.convertedSATScore !== null && (
              <div style={{ color: "red" }}>
                Equivalent SAT score: {this.state.convertedSATScore}
              </div>
            )}
          </div>

          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>Country</div>
            <select
              value={this.state.selectedCountry}
              onChange={this.handleCountryChange}
            >
              <option value="">Select Country</option>
              {this.state.countries.map((country) => (
                <option key={country.ID} value={country.Title}>
                  {country.Title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>City</div>
            <select
              value={this.state.selectedCity}
              onChange={this.handleCityChange}
            >
              <option value="">Select City</option>
              {this.state.cities.map((city) => (
                <option key={city.ID} value={city.Title}>
                  {city.Title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>University</div>

            <select
              value={this.state.selectedUniversity}
              onChange={this.handleUniversityChange}
            >
              <option value="">Select University</option>
              {this.state.universities.map((university) => (
                <option key={university.ID} value={university.Title}>
                  {university.Title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>Program</div>

            <select
              value={this.state.selectedProgram}
              onChange={this.handleProgramChange}
            >
              <option value="">Select Program</option>
              {this.state.programs.map((program) => (
                <option key={program.ID} value={program.Title}>
                  {program.Title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>Expense</div>
            <select
              value={this.state.selectedExpense}
              onChange={this.handleExpenseChange}
            >
              <option value="">Select Expense</option>
              <option value="100k<">Less Than 100k</option>
              <option value="100k<200k">Between 100k and 200k</option>
              <option value="200k<">More than 200k</option>
            </select>
          </div>
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>University Type</div>
            <select
              value={this.state.selectedUniversityType}
              onChange={this.handleUniversityTypeChange}
            >
              <option value="">Select University Type</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div className={styles.itemField}>
            <label>
              <input
                type="checkbox"
                checked={this.state.includeIvyLeague}
                onChange={this.handleIvyLeagueChange}
              />
              Include Ivy Leagues
            </label>
          </div>

          <div className={styles.itemField}>
            <label>
              <input
                type="checkbox"
                checked={this.state.STEMcourse}
                onChange={this.handleSTEMcourseChange}
              />
              Has STEM Course
            </label>
          </div>
        </div>

        <div className="results">
          <div className={styles.itemField}>
            <div className={styles.fieldLabel}>All Items</div>
            <div id="allItems"></div>
          </div>
        </div>

        <div className="buttons">
          <div className={styles.buttonSection}>
            <div className={styles.button}>
              <span className={styles.label} onClick={this.getAllItems}>
                Search
              </span>
            </div>
            <div className={styles.button}>
              <span className={styles.label} onClick={this.undoRead}>
                Undo Read
              </span>
            </div>

            <div className={styles.button}>
              <span className={styles.label} onClick={this.getUniInfo}>
                getUniInfo
              </span>
            </div>
            <div className={styles.button}>
              <span className={styles.label} onClick={this.getProgInfo}>
                getProgInfo
              </span>
            </div>

            <div className={styles.button}>
              <span
                className={styles.fieldLabel}
                onClick={this.getShortlistedItems}
              >
                My Lists
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  private handleTestTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ selectedTestType: event.target.value });
  };

  private handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ score: event.target.value });
  };


  private getShortlistedItems = async () => {
    this.undoRead();
  
    try {
        // Fetch items from the Shortlisted list
        const items: any[] = await this._sp.web.lists
            .getByTitle("Shortlisted")
            .items.select("ID", "Title", "University", "username")(); // Include the "ID" field

        // Get the current user's title (assuming you have access to it)
        const user = await this._sp.web.currentUser();
        const currentUserTitle = user.Title; // Replace with the actual current user's title

        // Generate HTML for the table
        let html = `<div class="tiles-container">`;

        let rowCounter = 0; // Counter to keep track of tiles in a row
        items.forEach((item) => {
            if (item.username === currentUserTitle) {
                // Check if a new row should be started
                if (rowCounter % 3 === 0) {
                    if (rowCounter !== 0) {
                        html += `</div>`; // Close the previous row
                    }
                    html += `<div class="tiles-row">`; // Start a new row
                }

                html += `
    <div class="tile">
      <div class="tile-header">
        <h2>${item.University}</h2> <!-- University name as heading -->
      </div>
      <div class="tile-content">
        <p>${item.Title}</p>
      </div>
      <div class="tile-footer">
        <button class="delete-button" data-id="${item.ID}">Delete</button>
        <button class="apply-button" data-id="${item.ID}">Apply</button>
      </div>
    </div>`;
                rowCounter++;
            }
        });

        html += `</div>`; // Close the last row

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



    // Working tiles 
    
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("ID", "Title", "University", "username")(); // Include the "ID" field

//       // Get the current user's title (assuming you have access to it)
//       const user = await this._sp.web.currentUser();
//       const currentUserTitle = user.Title; // Replace with the actual current user's title

//       // Generate HTML for the table
//       let html = `<div class="tiles-container">`;

// items.forEach((item) => {
//   if (item.username === currentUserTitle) {
//     html += `
// <div class="tile">
//   <div class="tile-content">
//     <h3>${item.Title}</h3>
//     <p>${item.University}</p>
//   </div>
//   <div class="tile-actions">
//     <button class="delete-button" data-id="${item.ID}">Delete</button>
//     <button class="apply-button" data-id="${item.ID}">Apply</button>
//   </div>
// </div>`;
//   }
// });

// html += `</div>`;


//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and apply buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               await this.deleteItemFromShortlist(id);
//               alert("Item Deleted!");
//             } else {
//               console.error("ID is missing or undefined from button dataset.");
//             }
//           });
//         });

//         document.querySelectorAll(".apply-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               await this.applyItem(id);
//               alert("Item Applied!");
//             } else {
//               console.error("ID is missing or undefined from button dataset.");
//             }
//           });
//         });
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } catch (error) {
//       console.error("Error fetching shortlisted items:", error);
//       // Optionally, display an error message or handle the error in another way
//     }
//   };

  // Working table

//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("ID", "Title", "University", "username")(); // Include the "ID" field

//       // Get the current user's title (assuming you have access to it)
//       const user = await this._sp.web.currentUser();
//       const currentUserTitle = user.Title; // Replace with the actual current user's title

//       // Generate HTML for the table
//       let html = `
// <table>
// <tr>
//   <th>Title</th>
//   <th>University</th>
//   <th>Action</th>
// </tr>`;

//       items.forEach((item) => {
//         // Check if the item's Username matches the current user's title
//         if (item.username === currentUserTitle) {
//           html += `
// <tr>
//   <td>${item.Title}</td>
//   <td>${item.University}</td>
//   <td>
//     <button class="delete-button" data-id="${item.ID}">Delete</button>
//     <button class="apply-button" data-id="${item.ID}">Apply</button>
//   </td>
// </tr>`;
//         }
//       });

//       html += `</table>`;

//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and apply buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               await this.deleteItemFromShortlist(id);
//               alert("Item Deleted!");
//             } else {
//               console.error("ID is missing or undefined from button dataset.");
//             }
//           });
//         });

//         document.querySelectorAll(".apply-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               await this.applyItem(id);
//               alert("Item Applied!");
//             } else {
//               console.error("ID is missing or undefined from button dataset.");
//             }
//           });
//         });
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } catch (error) {
//       console.error("Error fetching shortlisted items:", error);
//       // Optionally, display an error message or handle the error in another way
//     }
//   };

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

  private handleIvyLeagueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ includeIvyLeague: event.target.checked }, () => {
      // After updating the state, re-render the filtered items
      this.getAllItems();
      console.log("Include Ivy League:", this.state.includeIvyLeague);
    });
  };

  private handleSTEMcourseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ STEMcourse: event.target.checked }, () => {
      this.getAllItems();
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

  private handleUniversityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedUniversity = event.target.value;
    this.setState({ selectedUniversity, selectedProgram: "", programs: [] });
    if (selectedUniversity) {
      this.fetchProgramsFromSharePointList(selectedUniversity);
    }
  };
  private handleUniversityTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ selectedUniversityType: e.target.value });
  };

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
      alert("An error occurred while shortlisting the university.");
    }
  };

  // Filter By public and private
  private getAllItems = async () => {
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
          .orderBy("GlobalRanking", true)(); // true for ascending order
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
          .orderBy("GlobalRanking", true)(); // true for ascending order
      }

      console.log(items);

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
