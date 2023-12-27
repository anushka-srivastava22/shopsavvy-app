import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { Card, CardBody, CardHeader, Box, Text, StackDivider, Stack, Heading } from '@chakra-ui/react'
//import Dashboard from './Dashboard';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <Card>
              <CardHeader>
                <Heading size='lg'>Profile</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {auth?.user?.name}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Mail Id
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {auth?.user?.email}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Address
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {auth?.user?.address}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Contact Number
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {auth?.user?.phone}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            {/* <div className="card w-75 p-3">

              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;