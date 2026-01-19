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
import Icon from "@mui/material/Icon";

// @mui material components
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import { Card } from "@mui/material";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="fingerprint"
                title="Total Enrollement"
                // count={1863281}
                count="54,24,164"
                percentage={{
                  color: "success",
                  amount: "+6%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="sync_alt"
                title="Total Updates"
                count="4,56,300"
                percentage={{
                  color: "success",
                  amount: "+8%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="my_location"
                title="Upcoming Surge"
                count="19"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="map"
                title="High-Demand Zones"
                count="18075"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Enrollment Info"
                  description="Insights based on Enrollment"
                  date="updated 2 min ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Updates Info"
                  description={<>Insights based on updates.</>}
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Infrastructure Readiness Index"
                  description="Based on enrolment load and update frequency ."
                  date="Updated using recent enrolment patterns"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <OrdersOverview /> */}
              {/* <Card>
                <MDBox p={3}>
                  <MDTypography variant="h6" gutterBottom>
                    Key Insights (Jan–Dec 2025)
                  </MDTypography>

                  <MDBox mt={2}>
                    <MDTypography variant="body2" color="text">
                      • Northern and central states show the highest Aadhaar enrolment growth.
                    </MDTypography>

                    <MDTypography variant="body2" color="text">
                      • Urban districts account for most adult (17+) updates, indicating migration.
                    </MDTypography>

                    <MDTypography variant="body2" color="text">
                      • School admission months show predictable enrolment surges.
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </Card> */}
              <Card>
                <MDBox p={3}>
                  <MDTypography variant="h6" gutterBottom>
                    Key Insights (Jan–Dec 2025)
                  </MDTypography>

                  <MDBox mt={2}>
                    {/* Insight 1 */}
                    <MDBox display="flex" alignItems="flex-start" mb={1.5}>
                      <Icon sx={{ color: "info.main", mt: "2px", mr: 1 }}>trending_up</Icon>
                      <MDTypography variant="body2" color="text">
                        Northern and central states show the highest Aadhaar enrolment growth.
                      </MDTypography>
                    </MDBox>

                    {/* Insight 2 */}
                    <MDBox display="flex" alignItems="flex-start" mb={1.5}>
                      <Icon sx={{ color: "success.main", mt: "2px", mr: 1 }}>location_city</Icon>
                      <MDTypography variant="body2" color="text">
                        Urban districts account for most adult (17+) updates, indicating migration.
                      </MDTypography>
                    </MDBox>

                    {/* Insight 3 */}
                    <MDBox display="flex" alignItems="flex-start">
                      <Icon sx={{ color: "warning.main", mt: "2px", mr: 1 }}>school</Icon>
                      <MDTypography variant="body2" color="text">
                        School admission months show predictable enrolment surges.
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
              {/* Upcoming Surge Insight */}
              {/* Upcoming Surge Insight */}
              <MDBox
                mt={4}
                p={3}
                borderRadius="lg"
                sx={{
                  backgroundColor: "rgba(255, 193, 7, 0.08)",
                  border: "1px solid rgba(255, 193, 7, 0.3)",
                }}
              >
                {/* Header */}
                <MDBox display="flex" alignItems="center" mb={1}>
                  <Icon sx={{ color: "warning.main", mr: 1 }}>warning</Icon>
                  <MDTypography variant="h6" fontWeight="medium">
                    Upcoming Surge
                  </MDTypography>
                </MDBox>

                {/* Main number */}
                <MDTypography variant="h3" fontWeight="bold" color="warning" lineHeight={1}>
                  28/02/2026
                </MDTypography>

                {/* Description */}
                {/* <MDTypography variant="body2" color="text" sx={{ mt: 1 }}>
                  Expected high-load days in the next 30 days based on recent enrolment and update
                  trends.
                </MDTypography> */}

                {/* CTA styled like insight */}
                <MDBox
                  mt={2}
                  px={2}
                  py={1}
                  borderRadius="md"
                  sx={{
                    backgroundColor: "rgba(255, 193, 7, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <MDTypography variant="button" fontWeight="medium" color="warning">
                    View regions affected during peak load periods (Feb-Mar 2026)
                  </MDTypography>

                  <Icon sx={{ color: "warning.main", fontSize: 20 }}>arrow_forward</Icon>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
