import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import CardComponent from "./index";
import AppIcon from "./AppIcon";
import Container from "../mix/Container";

storiesOf("Card", module).add("card", () => (
    <Container>

      <CardComponent
        image={text("Image", <AppIcon/>)}
        title={text("Title", "Inoveaza")}
      >
        {text("Body", "atat accesul la materiale audio cât și procesele tranzacționale de producere a\n" +
            "                acestora prin utilizarea unui mediu aât de dinamic cum este internetul.")}
      </CardComponent>

      <CardComponent
          image={text("Image", <AppIcon/>)}
          title={text("Title", "Stimuleaza")}
      >
        {text("Body", " o piață în creștere, prin facilitarea accesului editurilor mai\n" +
            "        mici la servicii de producție de audiobook-uri și alte servicii de text-to-audio.")}
      </CardComponent>

        <CardComponent
            image={text("Image", <AppIcon/>)}
            title={text("Title", "Libereaza")}
        >
            {text("Body", " piața de srvicii conexe domeniului, dând posibilitatea unei largi categorii\n" +
                "        de prestatori și angajatori de a-și prezenta și/sau contracta serviciil din domeniu.")}
        </CardComponent>
      </Container>

));
