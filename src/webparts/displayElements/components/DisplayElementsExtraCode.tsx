// Extra Code

// private getAllItems = async () => {
//   try {
//     const items: any[] = await this._sp.web.lists.getByTitle('Display_Uni_List').items.select('ID', 'University/Title','City/Title','Country/Title','Program_M/Title' ).expand('Country','City','University','Program_M')();
//     console.log(items);
//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'All Items' not found.");
//       }
//     } else {
//       alert(`List is empty.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private getAllItems = async () => {
//   try {
//     const items: any[] = await this._sp.web.lists.getByTitle('Display_Uni_List').items.select('ID', 'University/Title','City/Title','Country/Title','Program_M/Title', 'Img_A' ).expand('Country','City','University','Program_M')();
//     console.log(items);
//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th><th>Image</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td><td><img src="${imageUrl}" alt="Image2" style="width: 100px; height: 100px;" /></td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`List is empty.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// Old Code
// private getAllItems = async () => {
//   try {
//     const { selectedCity } = this.state;

//     let items: any[];
//     if (selectedCity) {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')
//         .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//     } else {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th><th>Image</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td><td><img src="${imageUrl}" alt="Image2" style="width: 100px; height: 100px;" /></td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

//New Code
// private getAllItems = async () => {
//   try {
//     const { selectedCity } = this.state;

//     let items: any[];
//     if (selectedCity) {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')
//         .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//     } else {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<div class="tiles">`;
//       items.map((item, index) => {
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `
//           <div class="tile">
//             <img src="${imageUrl}" alt="Image2" class="tile-image" />
//             <div class="tile-title">${universityTitle}</div>
//           </div>`;
//       });
//       html += `</div>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private shortlistCourse = async () => {
//   try {
//     const {selectedUniversity,selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }
//     // Add the item to the "Favourites" list with the titles and IDs

//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurreds while shortlisting the course.");
//   }
// };

// private shortlistCourse = async () => {
//   try {
//     const { selectedUniversity, selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }

//     // Get the current user's information
//     const currentUser = this.context.pageContext.User;

//     // Add the item to the "Favourites" list with the titles, IDs, and current user
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       User: currentUser.Id, // Assuming "User" is a lookup column
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

//   private shortlistCourse = async () => {
//     try {
//       const {selectedUniversity,selectedProgram } = this.state;
//       if (!selectedUniversity || !selectedProgram) {
//         alert("Please select a University and a Program before shortlisting.");
//         return;
//       }

//       // Get the current user
//       const user = await this._sp.web.currentUser();
//       console.log(`Current user: ${user.Title}`);

//       // Add the item to the "Favourites" list with the titles and IDs
//       await this._sp.web.lists.getByTitle("Favourites").items.add({
//         Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//         University: selectedUniversity,
//         Program: selectedProgram,
//     student_name: user.Title, // Add the user's title to the item
//       });

//       alert("Course has been successfully shortlisted!");
//     } catch (error) {
//       console.error("Error shortlisting course:", error);
//       alert("An error occurred while shortlisting the course.");
//     }
// }

// private shortlistCourse = async () => {
//   try {
//     const { selectedUniversity, selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }

//     // Get the current user
//     const user = await this._sp.web.currentUser();
//     console.log(`Current user: ${user.Title}`);

//     // Add the item to the "Favourites" list with the titles and IDs
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       username: user.Title, // Add the user's title to the item
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

// private shortlistItem = async (itemId) => {
//   try {
//     const item = await this._sp.web.lists.getByTitle('Display_Uni_List').items.getById(itemId).select('University/Title', 'Program_M/Title').expand('University', 'Program_M').get();
//     const selectedUniversity = item.University.Title;
//     const selectedProgram = item.Program_M.Title;

//     // Get the current user
//     const user = await this._sp.web.currentUser();
//     console.log(`Current user: ${user.Title}`);

//     // Add the item to the "Favourites" list with the titles and IDs
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       username: user.Title, // Add the user's title to the item
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

//   private getAllItems = async () => {
//     try {
//       const { selectedCity } = this.state;

//       let items: any[];
//       if (selectedCity) {
//         items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//           .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//           .expand('Country', 'City', 'University', 'Program_M')
//           .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//       } else {
//         items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//           .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//           .expand('Country', 'City', 'University', 'Program_M')();
//       }

//       console.log(items);

//       if (items.length > 0) {
//         var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative; /* Added for button positioning */
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center; /* Center align content */
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;
// items.map((item, index) => {
//   const universityTitle = item.University ? item.University.Title : 'N/A';
//   const imageUrl = item.Img_A ? item.Img_A.Url : '';
//   const uniLink = item.Uni_links ? item.Uni_links.Url : '';
//   html += `
//     <div class="tile">
//     <a href="${uniLink}" target="_blank" rel="noopener noreferrer"> <!-- Open link in new tab -->
//     <img src="${imageUrl}" alt="Image2" class="tile-image" />
//     <div class="tile-title">${universityTitle}</div>
//   </a>
//   <button class="shortlist-button" onclick="console.log('Shorlisting${universityTitle}')">Shortlist</button>
//     </div>`;
// });
// html += `</div>`;
// const allItemsElement = document.getElementById("allItems");
// if (allItemsElement) {
//   allItemsElement.innerHTML = html;
// } else {
//   console.error("Element with id 'allItems' not found.");
// }
//     } else {
//         alert(`No items found.`);
//       }
//     } catch (e) {
//       console.error(e);
//       alert("An error occurred while fetching items.");
//     }
//   }
//   private getAllItems = async () => {
//     try {
//       const { selectedCountry } = this.state;

//       let items: any[];
//       if (selectedCountry) {
//         items = await this._sp.web.lists
//           .getByTitle("Display_Uni_List")
//           .items.select(
//             "ID",
//             "University/Title",
//             "City/Title",
//             "Country/Title",
//             "Program_M/Title",
//             "Img_A"
//           )
//           .expand("Country", "City", "University", "Program_M")
//           .filter(`Country/Title eq '${selectedCountry}'`)(); // Filter items by selected country
//       } else {
//         items = await this._sp.web.lists
//           .getByTitle("Display_Uni_List")
//           .items.select(
//             "ID",
//             "University/Title",
//             "City/Title",
//             "Country/Title",
//             "Program_M/Title",
//             "Img_A"
//           )
//           .expand("Country", "City", "University", "Program_M")();
//       }

//       console.log(items);

//       if (items.length > 0) {
//         var html = `<style>
//       .tiles {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 20px;
//       }
//       .tile {
//         position: relative; /* Added for button positioning */
//         border: 1px solid #ddd;
//         border-radius: 5px;
//         padding: 10px;
//         box-sizing: border-box;
//         text-align: center; /* Center align content */
//       }
//       .tile-image {
//         width: 100%;
//         height: auto;
//         border-radius: 5px;
//         cursor: pointer;
//       }
//       .tile-title {
//         font-weight: bold;
//         margin-top: 5px;
//       }
//       .shortlist-button {
//         background-color: #0078d4;
//         color: #fff;
//         border: none;
//         border-radius: 3px;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     </style>
//     <div class="tiles">`;
//         items.map((item, index) => {
//           const universityTitle = item.University
//             ? item.University.Title
//             : "N/A";
//           const imageUrl = item.Img_A ? item.Img_A.Url : "";
//           const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//           html += `
//   <div class="tile">
//   <a href="${uniLink}" target="_blank" rel="noopener noreferrer"> <!-- Open link in new tab -->
//   <img src="${imageUrl}" alt="Image2" class="tile-image" />
//   <div class="tile-title">${universityTitle}</div>
// </a>
// <button class="shortlist-button" onclick="console.log('Shorlisting${universityTitle}')">Shortlist</button>
//   </div>`;
//         });
//         html += `</div>`;
//         const allItemsElement = document.getElementById("allItems");
//         if (allItemsElement) {
//           allItemsElement.innerHTML = html;
//         } else {
//           console.error("Element with id 'allItems' not found.");
//         }
//       } else {
//         alert(`No items found.`);
//       }
//     } catch (e) {
//       console.error(e);
//       alert("An error occurred while fetching items.");
//     }
//   };

// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague } = this.state;

//     let filterQuery = "";

//     // Include filter for selected country and city
//     if (selectedCountry) {
//       filterQuery += `Country/Title eq '${selectedCountry}'`;
//     }

//     if (selectedCity) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `City/Title eq '${selectedCity}'`;
//     }

//     // Include Ivy League filter if checkbox is checked
//     if (includeIvyLeague) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `IsIvyLeague eq 1`; // Assuming 'IsIvyLeague' is a boolean field
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Render items as before
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// };

// private async fetchCitiesFromSharePointList(Country: string) {
//   try{
//     const cities: any[] = await this._sp.web.lists.getByTitle('City').items.filter(`Country eq '${Country}'`).select('ID', 'Title')();
//     this.setState({ cities });
//   }
//   catch(e){
//     console.error(e);
//   }
// }
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague } = this.state;

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

//     if (this.state.STEMcourse) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `STEM eq 1`;
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//       .tiles {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 20px;
//       }
//       .tile {
//         position: relative;
//         border: 1px solid #ddd;
//         border-radius: 5px;
//         padding: 10px;
//         box-sizing: border-box;
//         text-align: center;
//       }
//       .tile-image {
//         width: 100%;
//         height: auto;
//         border-radius: 5px;
//         cursor: pointer;
//       }
//       .tile-title {
//         font-weight: bold;
//         margin-top: 5px;
//       }
//       .shortlist-button {
//         background-color: #0078d4;
//         color: #fff;
//         border: none;
//         border-radius: 3px;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     </style>
//     <div class="tiles">`;

//       items.map((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         html += `
//         <div class="tile">
//           <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//             <img src="${imageUrl}" alt="Image2" class="tile-image" />
//             <div class="tile-title">${universityTitle}</div>
//           </a>
//           <button class="shortlist-button" onclick="console.log('Shortlisting ${universityTitle}')">Shortlist</button>
//         </div>`;
//       });

//       html += `</div>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
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

// private shortlistUniversity = async (id: string, University: string, Program: string) => {
//   try {
//     const user = await this._sp.web.currentUser();
//     const loginName = user.LoginName;
//     const date = this.getCurrentDate();
//     const MyItemUniq = `${loginName}${date}${id}${University}`;

//     await this._sp.web.lists.getByTitle("Shortlisted").items.add({
//       Title: `Shortlisted ${id}`,
//       University : University,
//       Program : Program,
//       UniqueIdentifier: MyItemUniq,
//       username: user.Title,
//     });

//     alert("University Shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting university:", error);
//     alert("An error occurred while shortlisting the university.");
//   }
// };

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (
//       minRank !== undefined &&
//       maxRank !== undefined &&
//       minRank !== 0 &&
//       maxRank !== 15
//     ) {
//       const totalUniversities = await this.getTotalUniversitiesCount();
//       if (
//         totalUniversities !== undefined &&
//         maxRank - minRank >= totalUniversities
//       ) {
//         alert(
//           "The rank range is too large. Please select a smaller range or reset the rank filters."
//         );
//         return;
//       }
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (
//       minRank !== undefined &&
//       maxRank !== undefined &&
//       minRank !== 0 &&
//       maxRank !== 15
//     ) {
//       const totalUniversities = await this.getTotalUniversitiesCount();
//       if (
//         totalUniversities !== undefined &&
//         maxRank - minRank >= totalUniversities
//       ) {
//         alert(
//           "The rank range is too large. Please select a smaller range or reset the rank filters."
//         );
//         return;
//       }
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (minRank !== undefined && maxRank !== undefined) {
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// };

// This is without rank filter
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
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
//             // const program = target.dataset.program;
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

// Generating for the rank filter
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

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
//           "GlobalRanking"
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
//           "GlobalRanking"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .orderBy("GlobalRanking", true)(); // true for ascending order
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//           .tiles {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 20px;
//           }
//           .tile {
//             position: relative;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             padding: 10px;
//             box-sizing: border-box;
//             text-align: center;
//           }
//           .tile-image {
//             width: 100%;
//             height: auto;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//           .tile-title {
//             font-weight: bold;
//             margin-top: 5px;
//           }
//           .tile-ranking {
//             margin-top: 5px;
//           }
//           .shortlist-button {
//             background-color: #0078d4;
//             color: #fff;
//             border: none;
//             border-radius: 3px;
//             padding: 5px 10px;
//             cursor: pointer;
//           }
//         </style>
//         <div class="tiles">`;

//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const globalRanking = item.GlobalRanking ? item.GlobalRanking : "N/A";
//         html += `
//             <div class="tile">
//               <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//                 <img src="${imageUrl}" alt="Image2" class="tile-image" />
//                 <div class="tile-title">${universityTitle}</div>
//                 <div class="tile-ranking">Rank: ${globalRanking}</div>
//               </a>
//               <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//             </div>`;
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
//             // const program = target.dataset.program;
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

// Generating for adding expense

// private getAllItems = async () => {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       selectedExpense,
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
//           "GlobalRanking"
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
//           "GlobalRanking"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .orderBy("GlobalRanking", true)(); // true for ascending order
//     }

//     console.log(items);

//     // Rest of your code for rendering items
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
//         html += `
//                   <div class="tile">
//                     <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//                       <img src="${imageUrl}" alt="Image2" class="tile-image" />
//                       <div class="tile-title">${universityTitle}</div>
//                       <div class="tile-ranking">Rank: ${globalRanking}</div>
//                     </a>
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
//             // const program = target.dataset.program;
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

// Fetch data of all user
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University")();

//       let html = `
// <table>
//   <tr>
//     <th>Title</th>
//     <th>University</th>
//     <th>Action</th>
//   </tr>`;

//       items.forEach((item) => {
//         html += `
//   <tr>
//     <td>${item.Title}</td>
//     <td>${item.University}</td>
//     <td>
//       <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//       <button class="invest-button" data-unique-identifier="${item.UniqueIdentifier}">Invest</button>
//     </td>
//   </tr>`;
//       });

//       html += `</table>`;

//       html += `</table>`;

//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and invest buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
//             }
//           });
//         });

//         document.querySelectorAll(".invest-button").forEach((button) => {
//           button.addEventListener("click", (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               // this.investInItem(id);
//               // alert("Item Added to Investment");
//               alert($("#allItems").html());
//             } else {
//               console.error("Item ID is missing from button dataset.");
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

// Fetch data of Single user

// private getUniInfo = async () => {
//   try {
//     const { selectedUniversity } = this.state;
//     const uni: any[] = await this._sp.web.lists
//       .getByTitle("University")
//       .items.filter(`Title eq '${selectedUniversity}'`)
//       .select("ID", "Title", "TotalEnrollment", "City", "Thumbnail")();
//     if (uni.length > 0) {
//       var html = `<div><strong>University:</strong> ${uni[0].Title}</div>`;
//       html += `<div><strong>Total Enrollment:</strong> ${uni[0]["TotalEnrollment"]}</div>`;
//       html += `<div><strong>City:</strong> ${uni[0].City}</div>`;
//       // Display the image if Thumbnail URL is available
//       if (uni[0].Thumbnail) {
//         html += `<div style="width: 200px; height: 200px; background-image: url('${uni[0].Thumbnail}'); background-size: cover;"></div>`;
//       }
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No data found for the selected university.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching the item.");
//   }
// };

// All Information of university
// private getUniInfo = async () => {
//   try {
//     const { selectedUniversity } = this.state;
//     const uni: any[] = await this._sp.web.lists
//       .getByTitle("University")
//       .items.filter(`Title eq '${selectedUniversity}'`)
//       .select(
//         "ID",
//         "Title",
//         "University/Website",
//         "Location",
//         "City",
//         "Expense",
//         "GlobalRank",
//         "TotalEnrollment",
//         "Undergraduate",
//         "Male/Female",
//         "FinancialAid",
//         "PellGrant",
//         "StudentLoans",
//         "AverageDebt",
//         "Applicants",
//         "Accepted",
//         "Enrolled",
//         "ReturningFreshmen",
//         "Academics",
//         "Social",
//         "QualityOfLife",
//         "Admission",
//         "Private/Public",
//         "Thumbnail"
//       )();

//     if (uni.length > 0) {
//       let html = `<table>`;
//       for (const itemKey in uni[0]) {
//         if (uni[0].hasOwnProperty(itemKey)) {
//           const itemValue = uni[0][itemKey];
//           html += `<tr><td><strong>${itemKey}</strong></td><td>${itemValue}</td></tr>`;
//         }
//       }
//       html += `</table>`;

//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No data found for the selected university.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching the item.");
//   }
// };
// Old code to fetch shortlisted
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University", "username")(); // Include the "Username" field

//       // Get the current user's title (assuming you have access to it)
//       const user = await this._sp.web.currentUser();

//       const currentUserTitle = user.Title; // Replace with the actual current user's title
//       console.log(`Current user: ${currentUserTitle}`);
//       console.log(`user : ${user.Title}`);
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
//     <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//     <button class="invest-button" data-unique-identifier="${item.UniqueIdentifier}">Apply</button>
//   </td>
// </tr>`;
//         }
//       });

//       html += `</table>`;

//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and invest buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
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

//   private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//     console.log("UniqueIdentifier:", uniqueIdentifier);
//   };

// private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//   try {
//     const list = this._sp.web.lists.getByTitle("Shortlisted");

//     // Create a CAML query to filter items based on the UniqueIdentifier column
//     const camlQuery = `<View><Query><Where><Eq><FieldRef Name='UniqueIdentifier'/><Value Type='Text'>${uniqueIdentifier}</Value></Eq></Where></Query></View>`;

//     // Retrieve items based on the CAML query
//     const items = await list.getItemsByCAMLQuery({ ViewXml: camlQuery });

//     // Check if any items were found
//     if (items && items.length > 0) {
//       // Delete the first item found (assuming there's only one matching item)
//       await items[0].delete();
//       console.log(
//         `Item with UniqueIdentifier ${uniqueIdentifier} deleted from Shortlisted list.`
//       );

//       // Wait for a short delay to allow for server synchronization
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // 1000ms = 1 second

//       // Update the displayed list of shortlisted items
//       this.getShortlistedItems();
//     } else {
//       console.log(
//         `Item with UniqueIdentifier ${uniqueIdentifier} does not exist in the Shortlisted list.`
//       );
//     }
//   } catch (error) {
//     console.error(
//       `Error deleting item with UniqueIdentifier ${uniqueIdentifier} from Shortlisted list:`,
//       error
//     );
//   }
// };

// New Code for shortlisting
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University", "username")(); // Include the "Username" field

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
//     <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//     <button class="apply-button" data-unique-identifier="${item.UniqueIdentifier}">Apply</button>
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
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
//             }
//           });
//         });

//         document.querySelectorAll(".apply-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.applyItem(uniqueIdentifier);
//               alert("Item Applied!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
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

//   private applyItem = async (uniqueIdentifier: string) => {
//     try {
//       // Convert the uniqueIdentifier to a number
//       const id = parseInt(uniqueIdentifier, 10);

//       // Get the item from the "Shortlisted" list
//       const item = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.getById(id)();

//       // Add the item to the "ApplicationList"
//       await this._sp.web.lists.getByTitle("ApplicationList").items.add({
//         Title: item.UniqueIdentifier,
//         username: item.username,
//         UniversityName: item.University,
//       });
//       console.log(
//         `Item with uniqueIdentifier: ${uniqueIdentifier} applied to ApplicationList.`
//       );
//     } catch (error) {
//       console.error(
//         `Error applying item with uniqueIdentifier: ${uniqueIdentifier}`,
//         error
//       );
//     }
//   };

//   private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//     try {
//       // Convert the uniqueIdentifier to a number
//       const id = parseInt(uniqueIdentifier, 10);

//       // Delete the item from the "Shortlisted" list
//       await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.getById(id)
//         .delete();
//       console.log(
//         `Item with uniqueIdentifier: ${uniqueIdentifier} deleted from Shortlisted list.`
//       );
//     } catch (error) {
//       console.error(
//         `Error deleting item with uniqueIdentifier: ${uniqueIdentifier}`,
//         error
//       );
//     }
//   };

// Using ID instead of UniqueIdentifier
// Example functions for applyItem and deleteItemFromShortlist
// private applyItem = async (uniqueIdentifier: string) => {
//   // Implement apply logic here
//   console.log(`Applying item with uniqueIdentifier: ${uniqueIdentifier}`);
// };
// private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//   // Implement delete logic here
//   console.log(`Deleting item with uniqueIdentifier: ${uniqueIdentifier}`);
// };

// Original for applying
// private applyItem = async (uniqueIdentifier: string) => {
//   try {
//     // Get the item from the Shortlisted list
//     const item: any = await this._sp.web.lists.getByTitle("Shortlisted").items.getById(uniqueIdentifier).select("Title", "University", "username")();

//     // Add the item to the ApplicationList
//     await this._sp.web.lists.getByTitle("ApplicationList").items.add({
//       Title: item.Title,
//       username: item.username,
//       UniversityName: item.University
//     });

//     // Delete the item from the Shortlisted list
//     await this.deleteItemFromShortlist(uniqueIdentifier);

//     // Display a success message
//     alert("Item Applied!");

//     // Refresh the displayed items
//     await this.getShortlistedItems();
//   } catch (error) {
//     console.error("Error applying item:", error);
//     // Optionally, display an error message or handle the error in another way
//   }
// };

// Extra Code

// private getAllItems = async () => {
//   try {
//     const items: any[] = await this._sp.web.lists.getByTitle('Display_Uni_List').items.select('ID', 'University/Title','City/Title','Country/Title','Program_M/Title' ).expand('Country','City','University','Program_M')();
//     console.log(items);
//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'All Items' not found.");
//       }
//     } else {
//       alert(`List is empty.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private getAllItems = async () => {
//   try {
//     const items: any[] = await this._sp.web.lists.getByTitle('Display_Uni_List').items.select('ID', 'University/Title','City/Title','Country/Title','Program_M/Title', 'Img_A' ).expand('Country','City','University','Program_M')();
//     console.log(items);
//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th><th>Image</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td><td><img src="${imageUrl}" alt="Image2" style="width: 100px; height: 100px;" /></td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`List is empty.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// Old Code
// private getAllItems = async () => {
//   try {
//     const { selectedCity } = this.state;

//     let items: any[];
//     if (selectedCity) {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')
//         .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//     } else {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<table><tr><th>ID</th><th>Country</th><th>City</th><th>University</th><th>Program</th><th>Image</th></tr>`;
//       items.map((item, index) => {
//         const countryTitle = item.Country ? item.Country.Title : 'N/A';
//         const cityTitle = item.City ? item.City.Title : 'N/A';
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const programTitle = item.Program_M ? item.Program_M.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `<tr><td>${item.ID}</td><td>${countryTitle}</td><td>${cityTitle}</td><td>${universityTitle}</td><td>${programTitle}</td><td><img src="${imageUrl}" alt="Image2" style="width: 100px; height: 100px;" /></td></tr>`;
//       });
//       html += `</table>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

//New Code
// private getAllItems = async () => {
//   try {
//     const { selectedCity } = this.state;

//     let items: any[];
//     if (selectedCity) {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')
//         .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//     } else {
//       items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//         .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//         .expand('Country', 'City', 'University', 'Program_M')();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<div class="tiles">`;
//       items.map((item, index) => {
//         const universityTitle = item.University ? item.University.Title : 'N/A';
//         const imageUrl = item.Img_A ? item.Img_A.Url : '';
//         html += `
//           <div class="tile">
//             <img src="${imageUrl}" alt="Image2" class="tile-image" />
//             <div class="tile-title">${universityTitle}</div>
//           </div>`;
//       });
//       html += `</div>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private shortlistCourse = async () => {
//   try {
//     const {selectedUniversity,selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }
//     // Add the item to the "Favourites" list with the titles and IDs

//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurreds while shortlisting the course.");
//   }
// };

// private shortlistCourse = async () => {
//   try {
//     const { selectedUniversity, selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }

//     // Get the current user's information
//     const currentUser = this.context.pageContext.User;

//     // Add the item to the "Favourites" list with the titles, IDs, and current user
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       User: currentUser.Id, // Assuming "User" is a lookup column
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

//   private shortlistCourse = async () => {
//     try {
//       const {selectedUniversity,selectedProgram } = this.state;
//       if (!selectedUniversity || !selectedProgram) {
//         alert("Please select a University and a Program before shortlisting.");
//         return;
//       }

//       // Get the current user
//       const user = await this._sp.web.currentUser();
//       console.log(`Current user: ${user.Title}`);

//       // Add the item to the "Favourites" list with the titles and IDs
//       await this._sp.web.lists.getByTitle("Favourites").items.add({
//         Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//         University: selectedUniversity,
//         Program: selectedProgram,
//     student_name: user.Title, // Add the user's title to the item
//       });

//       alert("Course has been successfully shortlisted!");
//     } catch (error) {
//       console.error("Error shortlisting course:", error);
//       alert("An error occurred while shortlisting the course.");
//     }
// }

// private shortlistCourse = async () => {
//   try {
//     const { selectedUniversity, selectedProgram } = this.state;
//     if (!selectedUniversity || !selectedProgram) {
//       alert("Please select a University and a Program before shortlisting.");
//       return;
//     }

//     // Get the current user
//     const user = await this._sp.web.currentUser();
//     console.log(`Current user: ${user.Title}`);

//     // Add the item to the "Favourites" list with the titles and IDs
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       username: user.Title, // Add the user's title to the item
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

// private shortlistItem = async (itemId) => {
//   try {
//     const item = await this._sp.web.lists.getByTitle('Display_Uni_List').items.getById(itemId).select('University/Title', 'Program_M/Title').expand('University', 'Program_M').get();
//     const selectedUniversity = item.University.Title;
//     const selectedProgram = item.Program_M.Title;

//     // Get the current user
//     const user = await this._sp.web.currentUser();
//     console.log(`Current user: ${user.Title}`);

//     // Add the item to the "Favourites" list with the titles and IDs
//     await this._sp.web.lists.getByTitle("Favourites").items.add({
//       Title: `Shortlisted ${selectedUniversity} - ${selectedProgram}`,
//       University: selectedUniversity,
//       Program: selectedProgram,
//       username: user.Title, // Add the user's title to the item
//     });

//     alert("Course has been successfully shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting course:", error);
//     alert("An error occurred while shortlisting the course.");
//   }
// };

//   private getAllItems = async () => {
//     try {
//       const { selectedCity } = this.state;

//       let items: any[];
//       if (selectedCity) {
//         items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//           .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//           .expand('Country', 'City', 'University', 'Program_M')
//           .filter(`City/Title eq '${selectedCity}'`)(); // Filter items by selected city
//       } else {
//         items = await this._sp.web.lists.getByTitle('Display_Uni_List').items
//           .select('ID', 'University/Title', 'City/Title', 'Country/Title', 'Program_M/Title', 'Img_A')
//           .expand('Country', 'City', 'University', 'Program_M')();
//       }

//       console.log(items);

//       if (items.length > 0) {
//         var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative; /* Added for button positioning */
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center; /* Center align content */
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;
// items.map((item, index) => {
//   const universityTitle = item.University ? item.University.Title : 'N/A';
//   const imageUrl = item.Img_A ? item.Img_A.Url : '';
//   const uniLink = item.Uni_links ? item.Uni_links.Url : '';
//   html += `
//     <div class="tile">
//     <a href="${uniLink}" target="_blank" rel="noopener noreferrer"> <!-- Open link in new tab -->
//     <img src="${imageUrl}" alt="Image2" class="tile-image" />
//     <div class="tile-title">${universityTitle}</div>
//   </a>
//   <button class="shortlist-button" onclick="console.log('Shorlisting${universityTitle}')">Shortlist</button>
//     </div>`;
// });
// html += `</div>`;
// const allItemsElement = document.getElementById("allItems");
// if (allItemsElement) {
//   allItemsElement.innerHTML = html;
// } else {
//   console.error("Element with id 'allItems' not found.");
// }
//     } else {
//         alert(`No items found.`);
//       }
//     } catch (e) {
//       console.error(e);
//       alert("An error occurred while fetching items.");
//     }
//   }
//   private getAllItems = async () => {
//     try {
//       const { selectedCountry } = this.state;

//       let items: any[];
//       if (selectedCountry) {
//         items = await this._sp.web.lists
//           .getByTitle("Display_Uni_List")
//           .items.select(
//             "ID",
//             "University/Title",
//             "City/Title",
//             "Country/Title",
//             "Program_M/Title",
//             "Img_A"
//           )
//           .expand("Country", "City", "University", "Program_M")
//           .filter(`Country/Title eq '${selectedCountry}'`)(); // Filter items by selected country
//       } else {
//         items = await this._sp.web.lists
//           .getByTitle("Display_Uni_List")
//           .items.select(
//             "ID",
//             "University/Title",
//             "City/Title",
//             "Country/Title",
//             "Program_M/Title",
//             "Img_A"
//           )
//           .expand("Country", "City", "University", "Program_M")();
//       }

//       console.log(items);

//       if (items.length > 0) {
//         var html = `<style>
//       .tiles {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 20px;
//       }
//       .tile {
//         position: relative; /* Added for button positioning */
//         border: 1px solid #ddd;
//         border-radius: 5px;
//         padding: 10px;
//         box-sizing: border-box;
//         text-align: center; /* Center align content */
//       }
//       .tile-image {
//         width: 100%;
//         height: auto;
//         border-radius: 5px;
//         cursor: pointer;
//       }
//       .tile-title {
//         font-weight: bold;
//         margin-top: 5px;
//       }
//       .shortlist-button {
//         background-color: #0078d4;
//         color: #fff;
//         border: none;
//         border-radius: 3px;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     </style>
//     <div class="tiles">`;
//         items.map((item, index) => {
//           const universityTitle = item.University
//             ? item.University.Title
//             : "N/A";
//           const imageUrl = item.Img_A ? item.Img_A.Url : "";
//           const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//           html += `
//   <div class="tile">
//   <a href="${uniLink}" target="_blank" rel="noopener noreferrer"> <!-- Open link in new tab -->
//   <img src="${imageUrl}" alt="Image2" class="tile-image" />
//   <div class="tile-title">${universityTitle}</div>
// </a>
// <button class="shortlist-button" onclick="console.log('Shorlisting${universityTitle}')">Shortlist</button>
//   </div>`;
//         });
//         html += `</div>`;
//         const allItemsElement = document.getElementById("allItems");
//         if (allItemsElement) {
//           allItemsElement.innerHTML = html;
//         } else {
//           console.error("Element with id 'allItems' not found.");
//         }
//       } else {
//         alert(`No items found.`);
//       }
//     } catch (e) {
//       console.error(e);
//       alert("An error occurred while fetching items.");
//     }
//   };

// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague } = this.state;

//     let filterQuery = "";

//     // Include filter for selected country and city
//     if (selectedCountry) {
//       filterQuery += `Country/Title eq '${selectedCountry}'`;
//     }

//     if (selectedCity) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `City/Title eq '${selectedCity}'`;
//     }

//     // Include Ivy League filter if checkbox is checked
//     if (includeIvyLeague) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `IsIvyLeague eq 1`; // Assuming 'IsIvyLeague' is a boolean field
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Render items as before
//     } else {
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// };

// private async fetchCitiesFromSharePointList(Country: string) {
//   try{
//     const cities: any[] = await this._sp.web.lists.getByTitle('City').items.filter(`Country eq '${Country}'`).select('ID', 'Title')();
//     this.setState({ cities });
//   }
//   catch(e){
//     console.error(e);
//   }
// }
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague } = this.state;

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

//     if (this.state.STEMcourse) {
//       filterQuery += filterQuery ? " and " : "";
//       filterQuery += `STEM eq 1`;
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//       .tiles {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 20px;
//       }
//       .tile {
//         position: relative;
//         border: 1px solid #ddd;
//         border-radius: 5px;
//         padding: 10px;
//         box-sizing: border-box;
//         text-align: center;
//       }
//       .tile-image {
//         width: 100%;
//         height: auto;
//         border-radius: 5px;
//         cursor: pointer;
//       }
//       .tile-title {
//         font-weight: bold;
//         margin-top: 5px;
//       }
//       .shortlist-button {
//         background-color: #0078d4;
//         color: #fff;
//         border: none;
//         border-radius: 3px;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     </style>
//     <div class="tiles">`;

//       items.map((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         html += `
//         <div class="tile">
//           <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//             <img src="${imageUrl}" alt="Image2" class="tile-image" />
//             <div class="tile-title">${universityTitle}</div>
//           </a>
//           <button class="shortlist-button" onclick="console.log('Shortlisting ${universityTitle}')">Shortlist</button>
//         </div>`;
//       });

//       html += `</div>`;
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
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

// private shortlistUniversity = async (id: string, University: string, Program: string) => {
//   try {
//     const user = await this._sp.web.currentUser();
//     const loginName = user.LoginName;
//     const date = this.getCurrentDate();
//     const MyItemUniq = `${loginName}${date}${id}${University}`;

//     await this._sp.web.lists.getByTitle("Shortlisted").items.add({
//       Title: `Shortlisted ${id}`,
//       University : University,
//       Program : Program,
//       UniqueIdentifier: MyItemUniq,
//       username: user.Title,
//     });

//     alert("University Shortlisted!");
//   } catch (error) {
//     console.error("Error shortlisting university:", error);
//     alert("An error occurred while shortlisting the university.");
//   }
// };

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (
//       minRank !== undefined &&
//       maxRank !== undefined &&
//       minRank !== 0 &&
//       maxRank !== 15
//     ) {
//       const totalUniversities = await this.getTotalUniversitiesCount();
//       if (
//         totalUniversities !== undefined &&
//         maxRank - minRank >= totalUniversities
//       ) {
//         alert(
//           "The rank range is too large. Please select a smaller range or reset the rank filters."
//         );
//         return;
//       }
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (
//       minRank !== undefined &&
//       maxRank !== undefined &&
//       minRank !== 0 &&
//       maxRank !== 15
//     ) {
//       const totalUniversities = await this.getTotalUniversitiesCount();
//       if (
//         totalUniversities !== undefined &&
//         maxRank - minRank >= totalUniversities
//       ) {
//         alert(
//           "The rank range is too large. Please select a smaller range or reset the rank filters."
//         );
//         return;
//       }
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private async getAllItems() {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       minRank,
//       maxRank,
//     } = this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     if (minRank !== undefined && maxRank !== undefined) {
//       const rankFilter = await this.filterUniversitiesByRank(
//         minRank,
//         maxRank
//       );
//       if (filterQuery) {
//         filterQuery += ` and ${rankFilter}`;
//       } else {
//         filterQuery += rankFilter;
//       }
//     }

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// }

// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

//     let filterQuery = "";

//     // Add filter conditions based on selectedCountry, selectedCity, includeIvyLeague, and STEMcourse
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

//     let items: any[];

//     // Fetch items from the SharePoint list based on the filterQuery
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "University/GlobalRank"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       // Generate HTML for displaying the items
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       // Iterate over the items and generate HTML for each item
//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const rank = item.University ? item.University.GlobalRank : "N/A";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//               <div class="rank">Global Rank: ${rank}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
//       });

//       html += `</div>`;

//       // Update the HTML content of the "allItems" element
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
//       // If no items found, reset the state and display an alert
//       this.undoRead();
//       alert(`No items found.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching items.");
//   }
// };

// This is without rank filter
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .filter(filterQuery)();
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
//           "Uni_links"
//         )
//         .expand("Country", "City", "University", "Program_M")();
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//         .tiles {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
//         .tile {
//           position: relative;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 10px;
//           box-sizing: border-box;
//           text-align: center;
//         }
//         .tile-image {
//           width: 100%;
//           height: auto;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .tile-title {
//           font-weight: bold;
//           margin-top: 5px;
//         }
//         .shortlist-button {
//           background-color: #0078d4;
//           color: #fff;
//           border: none;
//           border-radius: 3px;
//           padding: 5px 10px;
//           cursor: pointer;
//         }
//       </style>
//       <div class="tiles">`;

//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         html += `
//           <div class="tile">
//             <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//               <img src="${imageUrl}" alt="Image2" class="tile-image" />
//               <div class="tile-title">${universityTitle}</div>
//             </a>
//             <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//           </div>`;
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
//             // const program = target.dataset.program;
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

// Generating for the rank filter
// private getAllItems = async () => {
//   try {
//     const { selectedCountry, selectedCity, includeIvyLeague, STEMcourse } =
//       this.state;

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
//           "GlobalRanking"
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
//           "GlobalRanking"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .orderBy("GlobalRanking", true)(); // true for ascending order
//     }

//     console.log(items);

//     if (items.length > 0) {
//       var html = `<style>
//           .tiles {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 20px;
//           }
//           .tile {
//             position: relative;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             padding: 10px;
//             box-sizing: border-box;
//             text-align: center;
//           }
//           .tile-image {
//             width: 100%;
//             height: auto;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//           .tile-title {
//             font-weight: bold;
//             margin-top: 5px;
//           }
//           .tile-ranking {
//             margin-top: 5px;
//           }
//           .shortlist-button {
//             background-color: #0078d4;
//             color: #fff;
//             border: none;
//             border-radius: 3px;
//             padding: 5px 10px;
//             cursor: pointer;
//           }
//         </style>
//         <div class="tiles">`;

//       items.forEach((item, index) => {
//         const universityTitle = item.University
//           ? item.University.Title
//           : "N/A";
//         const imageUrl = item.Img_A ? item.Img_A.Url : "";
//         const uniLink = item.Uni_links ? item.Uni_links.Url : "";
//         const globalRanking = item.GlobalRanking ? item.GlobalRanking : "N/A";
//         html += `
//             <div class="tile">
//               <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//                 <img src="${imageUrl}" alt="Image2" class="tile-image" />
//                 <div class="tile-title">${universityTitle}</div>
//                 <div class="tile-ranking">Rank: ${globalRanking}</div>
//               </a>
//               <button class="shortlist-button" data-id="${item.ID}" data-university="${universityTitle}" data-program="${item.Program_M.Title}">Shortlist</button>
//             </div>`;
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
//             // const program = target.dataset.program;
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

// Generating for adding expense

// private getAllItems = async () => {
//   try {
//     const {
//       selectedCountry,
//       selectedCity,
//       includeIvyLeague,
//       STEMcourse,
//       selectedExpense,
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
//           "GlobalRanking"
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
//           "GlobalRanking"
//         )
//         .expand("Country", "City", "University", "Program_M")
//         .orderBy("GlobalRanking", true)(); // true for ascending order
//     }

//     console.log(items);

//     // Rest of your code for rendering items
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
//         html += `
//                   <div class="tile">
//                     <a href="${uniLink}" target="_blank" rel="noopener noreferrer">
//                       <img src="${imageUrl}" alt="Image2" class="tile-image" />
//                       <div class="tile-title">${universityTitle}</div>
//                       <div class="tile-ranking">Rank: ${globalRanking}</div>
//                     </a>
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
//             // const program = target.dataset.program;
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

// Fetch data of all user
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University")();

//       let html = `
// <table>
//   <tr>
//     <th>Title</th>
//     <th>University</th>
//     <th>Action</th>
//   </tr>`;

//       items.forEach((item) => {
//         html += `
//   <tr>
//     <td>${item.Title}</td>
//     <td>${item.University}</td>
//     <td>
//       <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//       <button class="invest-button" data-unique-identifier="${item.UniqueIdentifier}">Invest</button>
//     </td>
//   </tr>`;
//       });

//       html += `</table>`;

//       html += `</table>`;

//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and invest buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
//             }
//           });
//         });

//         document.querySelectorAll(".invest-button").forEach((button) => {
//           button.addEventListener("click", (event) => {
//             const target = event.target as HTMLElement;
//             const id = target.dataset.id;
//             if (id) {
//               // this.investInItem(id);
//               // alert("Item Added to Investment");
//               alert($("#allItems").html());
//             } else {
//               console.error("Item ID is missing from button dataset.");
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

// Fetch data of Single user

// private getUniInfo = async () => {
//   try {
//     const { selectedUniversity } = this.state;
//     const uni: any[] = await this._sp.web.lists
//       .getByTitle("University")
//       .items.filter(`Title eq '${selectedUniversity}'`)
//       .select("ID", "Title", "TotalEnrollment", "City", "Thumbnail")();
//     if (uni.length > 0) {
//       var html = `<div><strong>University:</strong> ${uni[0].Title}</div>`;
//       html += `<div><strong>Total Enrollment:</strong> ${uni[0]["TotalEnrollment"]}</div>`;
//       html += `<div><strong>City:</strong> ${uni[0].City}</div>`;
//       // Display the image if Thumbnail URL is available
//       if (uni[0].Thumbnail) {
//         html += `<div style="width: 200px; height: 200px; background-image: url('${uni[0].Thumbnail}'); background-size: cover;"></div>`;
//       }
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No data found for the selected university.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching the item.");
//   }
// };

// All Information of university
// private getUniInfo = async () => {
//   try {
//     const { selectedUniversity } = this.state;
//     const uni: any[] = await this._sp.web.lists
//       .getByTitle("University")
//       .items.filter(`Title eq '${selectedUniversity}'`)
//       .select(
//         "ID",
//         "Title",
//         "University/Website",
//         "Location",
//         "City",
//         "Expense",
//         "GlobalRank",
//         "TotalEnrollment",
//         "Undergraduate",
//         "Male/Female",
//         "FinancialAid",
//         "PellGrant",
//         "StudentLoans",
//         "AverageDebt",
//         "Applicants",
//         "Accepted",
//         "Enrolled",
//         "ReturningFreshmen",
//         "Academics",
//         "Social",
//         "QualityOfLife",
//         "Admission",
//         "Private/Public",
//         "Thumbnail"
//       )();

//     if (uni.length > 0) {
//       let html = `<table>`;
//       for (const itemKey in uni[0]) {
//         if (uni[0].hasOwnProperty(itemKey)) {
//           const itemValue = uni[0][itemKey];
//           html += `<tr><td><strong>${itemKey}</strong></td><td>${itemValue}</td></tr>`;
//         }
//       }
//       html += `</table>`;

//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;
//       } else {
//         console.error("Element with id 'allItems' not found.");
//       }
//     } else {
//       alert(`No data found for the selected university.`);
//     }
//   } catch (e) {
//     console.error(e);
//     alert("An error occurred while fetching the item.");
//   }
// };
// Old code to fetch shortlisted
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University", "username")(); // Include the "Username" field

//       // Get the current user's title (assuming you have access to it)
//       const user = await this._sp.web.currentUser();

//       const currentUserTitle = user.Title; // Replace with the actual current user's title
//       console.log(`Current user: ${currentUserTitle}`);
//       console.log(`user : ${user.Title}`);
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
//     <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//     <button class="invest-button" data-unique-identifier="${item.UniqueIdentifier}">Apply</button>
//   </td>
// </tr>`;
//         }
//       });

//       html += `</table>`;

//       // Display the table inside the specified <div>
//       const allItemsElement = document.getElementById("allItems");
//       if (allItemsElement) {
//         allItemsElement.innerHTML = html;

//         // Add event listeners to delete and invest buttons
//         document.querySelectorAll(".delete-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
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

//   private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//     console.log("UniqueIdentifier:", uniqueIdentifier);
//   };

// private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//   try {
//     const list = this._sp.web.lists.getByTitle("Shortlisted");

//     // Create a CAML query to filter items based on the UniqueIdentifier column
//     const camlQuery = `<View><Query><Where><Eq><FieldRef Name='UniqueIdentifier'/><Value Type='Text'>${uniqueIdentifier}</Value></Eq></Where></Query></View>`;

//     // Retrieve items based on the CAML query
//     const items = await list.getItemsByCAMLQuery({ ViewXml: camlQuery });

//     // Check if any items were found
//     if (items && items.length > 0) {
//       // Delete the first item found (assuming there's only one matching item)
//       await items[0].delete();
//       console.log(
//         `Item with UniqueIdentifier ${uniqueIdentifier} deleted from Shortlisted list.`
//       );

//       // Wait for a short delay to allow for server synchronization
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // 1000ms = 1 second

//       // Update the displayed list of shortlisted items
//       this.getShortlistedItems();
//     } else {
//       console.log(
//         `Item with UniqueIdentifier ${uniqueIdentifier} does not exist in the Shortlisted list.`
//       );
//     }
//   } catch (error) {
//     console.error(
//       `Error deleting item with UniqueIdentifier ${uniqueIdentifier} from Shortlisted list:`,
//       error
//     );
//   }
// };

// New Code for shortlisting
//   private getShortlistedItems = async () => {
//     try {
//       // Fetch items from the Shortlisted list
//       const items: any[] = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.select("Title", "University", "username")(); // Include the "Username" field

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
//     <button class="delete-button" data-unique-identifier="${item.UniqueIdentifier}">Delete</button>
//     <button class="apply-button" data-unique-identifier="${item.UniqueIdentifier}">Apply</button>
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
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.deleteItemFromShortlist(uniqueIdentifier);
//               alert("Item Deleted!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
//             }
//           });
//         });

//         document.querySelectorAll(".apply-button").forEach((button) => {
//           button.addEventListener("click", async (event) => {
//             const target = event.target as HTMLElement;
//             const uniqueIdentifier = target.dataset.uniqueIdentifier;
//             if (uniqueIdentifier) {
//               await this.applyItem(uniqueIdentifier);
//               alert("Item Applied!");
//             } else {
//               console.error(
//                 "UniqueIdentifier is missing or undefined from button dataset."
//               );
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

//   private applyItem = async (uniqueIdentifier: string) => {
//     try {
//       // Convert the uniqueIdentifier to a number
//       const id = parseInt(uniqueIdentifier, 10);

//       // Get the item from the "Shortlisted" list
//       const item = await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.getById(id)();

//       // Add the item to the "ApplicationList"
//       await this._sp.web.lists.getByTitle("ApplicationList").items.add({
//         Title: item.UniqueIdentifier,
//         username: item.username,
//         UniversityName: item.University,
//       });
//       console.log(
//         `Item with uniqueIdentifier: ${uniqueIdentifier} applied to ApplicationList.`
//       );
//     } catch (error) {
//       console.error(
//         `Error applying item with uniqueIdentifier: ${uniqueIdentifier}`,
//         error
//       );
//     }
//   };

//   private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//     try {
//       // Convert the uniqueIdentifier to a number
//       const id = parseInt(uniqueIdentifier, 10);

//       // Delete the item from the "Shortlisted" list
//       await this._sp.web.lists
//         .getByTitle("Shortlisted")
//         .items.getById(id)
//         .delete();
//       console.log(
//         `Item with uniqueIdentifier: ${uniqueIdentifier} deleted from Shortlisted list.`
//       );
//     } catch (error) {
//       console.error(
//         `Error deleting item with uniqueIdentifier: ${uniqueIdentifier}`,
//         error
//       );
//     }
//   };

// Using ID instead of UniqueIdentifier
// Example functions for applyItem and deleteItemFromShortlist
// private applyItem = async (uniqueIdentifier: string) => {
//   // Implement apply logic here
//   console.log(`Applying item with uniqueIdentifier: ${uniqueIdentifier}`);
// };
// private deleteItemFromShortlist = async (uniqueIdentifier: string) => {
//   // Implement delete logic here
//   console.log(`Deleting item with uniqueIdentifier: ${uniqueIdentifier}`);
// };

// Original for applying
// private applyItem = async (uniqueIdentifier: string) => {
//   try {
//     // Get the item from the Shortlisted list
//     const item: any = await this._sp.web.lists.getByTitle("Shortlisted").items.getById(uniqueIdentifier).select("Title", "University", "username")();

//     // Add the item to the ApplicationList
//     await this._sp.web.lists.getByTitle("ApplicationList").items.add({
//       Title: item.Title,
//       username: item.username,
//       UniversityName: item.University
//     });

//     // Delete the item from the Shortlisted list
//     await this.deleteItemFromShortlist(uniqueIdentifier);

//     // Display a success message
//     alert("Item Applied!");

//     // Refresh the displayed items
//     await this.getShortlistedItems();
//   } catch (error) {
//     console.error("Error applying item:", error);
//     // Optionally, display an error message or handle the error in another way
//   }
// };

{
  /* <div className={styles.buttonSection}>
              <div className={styles.button}>
                <span className={styles.label} onClick={this.shortlistCourse}>
                  Apply Here:
                </span>
              </div>
            </div> */
}
