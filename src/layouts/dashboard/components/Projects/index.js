/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import aadhaarMap from "assets/images/maps/aadhaar_enrolment_map.jpeg";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
// import DataTable from "examples/Tables/DataTable";

// Data
// import data from "layouts/dashboard/components/Projects/data";

// function Projects() {
//   const { columns, rows } = data();
//   const [menu, setMenu] = useState(null);

//   const openMenu = ({ currentTarget }) => setMenu(currentTarget);
//   const closeMenu = () => setMenu(null);

//   const renderMenu = (
//     <Menu
//       id="simple-menu"
//       anchorEl={menu}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "left",
//       }}
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={Boolean(menu)}
//       onClose={closeMenu}
//     >
//       <MenuItem onClick={closeMenu}>Action</MenuItem>
//       <MenuItem onClick={closeMenu}>Another action</MenuItem>
//       <MenuItem onClick={closeMenu}>Something else</MenuItem>
//     </Menu>
//   );

//   return (
//     <Card>
//       <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
//         <MDBox>
//           <MDTypography variant="h6" gutterBottom>
//             Projects
//           </MDTypography>
//           <MDBox display="flex" alignItems="center" lineHeight={0}>
//             <Icon
//               sx={{
//                 fontWeight: "bold",
//                 color: ({ palette: { info } }) => info.main,
//                 mt: -0.5,
//               }}
//             >
//               done
//             </Icon>
//             <MDTypography variant="button" fontWeight="regular" color="text">
//               &nbsp;<strong>30 done</strong> this month
//             </MDTypography>
//           </MDBox>
//         </MDBox>
//         <MDBox color="text" px={2}>
//           <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
//             more_vert
//           </Icon>
//         </MDBox>
//         {renderMenu}
//       </MDBox>
//       <MDBox>
//         <DataTable
//           table={{ columns, rows }}
//           showTotalEntries={false}
//           isSorted={false}
//           noEndBorder
//           entriesPerPage={false}
//         />
//       </MDBox>
//     </Card>
//   );
// }

function Projects() {
  return (
    <Card>
      {/* Header */}
      <MDBox p={3}>
        <MDTypography variant="h6" gutterBottom>
          Aadhaar Enrolment Distribution (State-wise)
        </MDTypography>
        <MDTypography variant="button" color="text">
          Data source: UIDAI · As of 2026
        </MDTypography>
      </MDBox>

      {/* Map Image */}
      <MDBox px={3} pb={3}>
        <MDBox
          component="img"
          src={aadhaarMap}
          alt="Aadhaar Enrolment Map of India"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
