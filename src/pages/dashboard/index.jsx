import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Typography, Grid, Card, Stack } from "@mui/material";
import Item from "@mui/material/Grid";
import Profile from "../../assets/leo.jpeg";
import { NavLink } from "react-router-dom";
import InputWithIcon from "../../components/form/InputWithIcon";
import SearchButtonWrapper from "../../components/form/SearchButtonWrapper";
import DateResponsiveWrapper from "../../components/form/DateResponsiveWrapper";
import PieChart from "../../components/charts/PieChart";
import SearchIcon from "@mui/icons-material/Search";
import AreaLineChart from "../../components/charts/AreaLineChart";

const Dashboard = () => {
  return (
    <>
      <Box gridColumn="span 8" gridRow="span 2">
        <Box style={{ margin: "0px 3%" }} gridColumn="span 12">
          <Row container={"true"}>
            <Col xs={12} sm={12} md={9}>
              <Typography
                variant="h5"
                pt={2}
                pb={3}
                borderBottom={"1px solid #8080802e"}
              >
                Dashboard
              </Typography>
              <Row>
                <Col>
                  <Stack direction="row" spacing={1}>
                    <InputWithIcon />
                    <SearchButtonWrapper />
                  </Stack>
                </Col>
                <Col sm={3}>
                  <Stack direction="row">
                    <DateResponsiveWrapper />
                  </Stack>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">
                          Asset Status
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">
                          Fleet Mileage
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <AreaLineChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">
                          Total Violations
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Box p-3>
                <Box borderLeft={"1px solid #ccc"} p-2>
                  <Stack
                    sx={{
                      padding: "8px",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    <img
                      src={Profile}
                      style={{ width: "100px", borderRadius: "50%" }}
                    />
                    <Typography pb-6>Hi, welcome, Leonard.</Typography>
                    <hr></hr>
                  </Stack>
                  <Stack sx={{ alignItems: "center", padding: "2px" }}>
                    RECENT NOTIFICATIONS
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                </Box>
              </Box>
            </Col>
          </Row>
          <Row container={"true"}>
            <Col xs={12} sm={12} md={9}>
              <Row>
                <Col>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="h6">Fleet</Typography>
                  </Stack>
                </Col>
                <Col sm={3}>
                  <Stack direction="row">
                    <DateResponsiveWrapper />
                  </Stack>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">Licenses</Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">
                          Alerts Summary
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box sx={{ background: " #e6f2ff", padding: "15px" }}>
                      <Stack sx={{ alignItems: "flex-start" }}>
                        {" "}
                        <Typography variant="subtitle1">
                          Asset Status
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "center" }}>
                        <PieChart />
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <SearchButtonWrapper />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Box gridColumn="span 3" gridRow="span 2"></Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
