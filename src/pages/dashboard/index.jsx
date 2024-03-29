import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Typography, Grid, Card, Stack } from "@mui/material";
import Profile from "../../assets/leo.jpeg";
import InputWithIcon from "../../components/form/InputWithIcon";
import SearchButtonWrapper from "../../components/form/SearchButtonWrapper";
import DateResponsiveWrapper from "../../components/form/DateResponsiveWrapper";
import PieChart from "../../components/charts/PieChart";
import DatePicker from "../../components/form/DatePicker";
import AreaLineChart from "../../components/charts/AreaLineChart";
import { CgProfile } from "react-icons/cg";
import SingleDate from "../../components/form/SingleDate";
import ButtonWithIcon from "../../components/form/ButtonWithIcon";
import { assetStatus } from "../../data/";

const Dashboard = () => {
  const [dateRange, setDateRange] = useState("dd-mm-yyyy - dd-mm-yyyy");
  return (
    <>
      <Box gridColumn="span 8" gridRow="span 2">
        <Box style={{ margin: "0px 3%" }} gridColumn="span 12">
          <Row container={"true"}>
            <Col
              xs={12}
              sm={12}
              md={10}
              style={{ borderRight: "1px solid #ccc" }}
            >
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
                <Col sm={2}>
                  <Stack direction="row" mt={2} sx={{ alignItems: "flex-end" }}>
                    <SingleDate />
                  </Stack>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "350px",
                      }}
                    >
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
                        <ButtonWithIcon />
                      </Stack>
                    </Box>
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Box py={3} px={1}>
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "350px",
                      }}
                    >
                      <Stack sx={{ alignItems: "flex-start" }}>
                        <Typography variant="subtitle1">
                          Fleet Mileage
                        </Typography>
                      </Stack>
                      <Stack sx={{ alignItems: "flex-end" }}>
                        <DatePicker />
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
                    <Box
                      sx={{
                        background: " #e6f2ff",
                        padding: "15px",
                        minHeight: "350px",
                      }}
                    >
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
                            <Typography variant="subtitle1">
                              Licenses
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
            </Col>
            <Col xs={12} sm={6} md={2}>
              <Box p-3>
                <Box p-2 px={2}>
                  <Stack
                    sx={{
                      padding: "8px",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <CgProfile size={150} color="#ccc" />
                    </Stack>
                    <Stack
                      py={2}
                      sx={{
                        alignItems: "center",
                        fontSize: "11px",
                        fontWeight: "400",
                      }}
                    >
                      <Typography variant="subtitle2">
                        Hi welcome, David.{" "}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    py={2}
                    sx={{
                      alignItems: "center",
                      borderTop: "1px solid #ccc",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: "12px", fontWeight: "700" }}
                    >
                      RECENT NOTIFICATIONS
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
