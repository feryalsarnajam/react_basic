import { data } from "../utils/data";
import logo from "../images/logo-winc.png";

import {
  UnorderedList,
  ListItem,
  Card,
  CardBody,
  Image,
  CardHeader,
  Flex,
  Button,
  Grid,
  GridItem,
  Box,
  HStack,
  Stack,
  VStack,
  Center,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const match = data.hits.find((item) => item.recipe.label === recipe);

  return (
    <>
      <Card
        borderRadius='0'
        bg='white'
        width={"60%"}
        height={"full"}
        left={"20%"}
        key={match.recipe.label}>
        <CardHeader padding={0}>
          <Flex display={"flex"} padding={4}>
            <Box justifyContent={"flex-start"} width={"45%"}>
              <Button
                backgroundColor='white'
                color={"blue.400"}
                _hover={{
                  background: "white",
                }}
                _active={{
                  background: "white",
                }}
                onClick={() => clickFn()}>
                {" "}
                &lt;{" "}
              </Button>
            </Box>
            <Box>
              <img src={logo} width={40} height={40} />
            </Box>
          </Flex>

          <Image height={40} width={"full"} src={match.recipe.image} />
        </CardHeader>

        <CardBody display={"flex"} padding={6}>
          {/* kolom links */}
          <Grid gridTemplateRows={"20px 50px 20px 20px 1fr"} width={"50%"}>
            <GridItem
              color={"gray.400"}
              fontSize={"x-small"}
              fontWeight={"bold"}>
              {match.recipe.mealType.join("/").toUpperCase()}
            </GridItem>

            <GridItem
              fontSize={"medium"}
              fontWeight={"bolder"}
              color={"gray.800"}>
              {match.recipe.label}
            </GridItem>

            <GridItem fontSize={"small"}>
              Total cooking time: {match.recipe.totalTime} minutes
            </GridItem>

            <GridItem fontSize={"small"}>
              Servings: {match.recipe.yield}
            </GridItem>

            <GridItem>
              <Box fontWeight={"bold"} fontSize={"small"} marginTop={2.5}>
                Ingredients:
              </Box>
              <UnorderedList listStyleType={"none"} marginLeft={0}>
                {match.recipe.ingredientLines.map((item) => (
                  <ListItem
                    fontSize={"small"}
                    list-style={"none"}
                    marginBottom={2}
                    key={item}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </GridItem>
          </Grid>

          {/* kolom rechts */}
          <Grid
            gridTemplateRows={"2fr 0.5fr 0.5fr 2fr"}
            width={"50%"}
            paddingLeft={6}>
            <GridItem>
              <Box fontSize={"small"}>Health Labels: </Box>

              <Box
                display={"flex"}
                justifyContent={"center"}
                paddingRight={"20px"}>
                <Box maxWidth={"450px"}>
                  <Box display={"block"}>
                    <UnorderedList
                      listStyleType={"none"}
                      display={"flex"}
                      flexWrap={"wrap"}
                      width={"100%"}
                      padding={"0"}
                      margin={"0 0 -10px"}>
                      {match.recipe.healthLabels.map((healthLabel) => (
                        <ListItem
                          key={healthLabel}
                          marginRight={"10px"}
                          marginBottom={"5px"}>
                          <Box
                            fontWeight={"bold"}
                            bg='purple.100'
                            fontSize={"x-small"}
                            list-style={"none"}>
                            {healthLabel}
                          </Box>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem marginTop={2.5}>
              <Box fontSize={"small"}>Diet:</Box>
              <Stack display={"flex"} align={"flex-start"} spacing={1}>
                {match.recipe.dietLabels.map((dietLabel) => (
                  <Box
                    key={dietLabel}
                    fontWeight={"bold"}
                    fontSize={"x-small"}
                    alignItems={"center"}
                    bg='green.100'>
                    {dietLabel.toUpperCase()}
                  </Box>
                ))}
              </Stack>
            </GridItem>

            <GridItem>
              <Box marginTop={2} fontSize={"small"}>
                Cautions:
              </Box>
              <HStack display={"flex"} align={"flex-start"} spacing={1}>
                {match.recipe.cautions.map((caution) => (
                  <Box
                    key={caution}
                    bg='red.100'
                    fontWeight={"bold"}
                    fontSize={"x-small"}>
                    {caution.toUpperCase()}
                  </Box>
                ))}
              </HStack>
            </GridItem>

            <GridItem>
              <Box
                fontSize={"small"}
                marginTop={2.5}
                fontWeight={"bold"}
                paddingBottom={1}>
                Total Nutrients:
              </Box>

              <Grid templateColumns='repeat(4, 1fr)' gap={2} fontSize={"small"}>
                <GridItem w='100%'>
                  <Box>{Math.round(match.recipe.calories)}</Box>
                  <Box>CALORIES</Box>
                </GridItem>

                <GridItem w='100%'>
                  <Box>
                    {Math.round(match.recipe.totalNutrients.CHOCDF.quantity)}
                    {match.recipe.totalNutrients.CHOCDF.unit}
                  </Box>
                  <Box>
                    {match.recipe.totalNutrients.CHOCDF.label.toUpperCase()}
                  </Box>
                </GridItem>

                <GridItem w='100%'>
                  <Box>
                    {Math.round(match.recipe.totalNutrients.PROCNT.quantity)}
                    {match.recipe.totalNutrients.PROCNT.unit}
                  </Box>
                  <Box>
                    {match.recipe.totalNutrients.PROCNT.label.toUpperCase()}
                  </Box>
                </GridItem>

                <GridItem w='100%'>
                  <Box>
                    {Math.round(match.recipe.totalNutrients.FAT.quantity)}
                    {match.recipe.totalNutrients.FAT.unit}
                  </Box>
                  <Box>
                    {match.recipe.totalNutrients.FAT.label.toUpperCase()}
                  </Box>
                </GridItem>

                <GridItem w='100%'>
                  <Box>
                    {Math.round(match.recipe.totalNutrients.CHOLE.quantity)}
                    {match.recipe.totalNutrients.CHOLE.unit}
                  </Box>
                  <Box>
                    {match.recipe.totalNutrients.CHOLE.label.toUpperCase()}
                  </Box>
                </GridItem>

                <GridItem w='100%'>
                  <Box>
                    {Math.round(match.recipe.totalNutrients.NA.quantity)}
                    {match.recipe.totalNutrients.NA.unit}
                  </Box>
                  <Box>
                    {match.recipe.totalNutrients.NA.label.toUpperCase()}
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};
