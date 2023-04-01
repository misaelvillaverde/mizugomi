"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { themeDictionary as theme } from "../theme";

const WaterPage = () => {
  return (
    <div>
      <h1>Water Reports</h1>
      <ul>
        <li>
          <Button bg={theme.white}>Falta de Flujo</Button>
        </li>
        <li>
          <Button bg={theme.white}>Turbiedades o Irregularidades</Button>
        </li>
      </ul>
    </div>
  );
};

export default WaterPage;
