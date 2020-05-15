import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";




import Article from "./index";
import ecosystemImage from './../../img/ecosistem.png'


storiesOf("Article", module).add("article", () => (
        <Article
            image={text("Image", {ecosystemImage})}
            title={text("Title", "Ecosistem")}
        >
            {text("Body", " Platforma va pune la dispoziția editorilor o metodă de realizare a unor producții în colaborare. Astfel, un\n" +
                "        editor poate adăuga o propunere de produs, atașând un eșantion sau un text integral dintr-o lucrare pe care\n" +
                "        dorește să o transforme într-un material digital, dar pentru a cărui realizare nu are puterea financiară sau nu\n" +
                "        dorește să-l finanțeze. Producătorii pot să solicite participarea în colaborare, propunând un preț de execuție\n" +
                "        pentru serviciul specific fiecăruia. Odată validați de către editor, cererea pentru serviciul respectiv se\n" +
                "        închide; producătorul devine co-producător la produs, urmând a primi un cuantum din veniturile provenite din\n" +
                "        vânzarea acestui produs. Acest cuantum se calculează în funcție de cota de participare, dată de prețul stabilit\n" +
                "        pentru serviciul prestat raportat la prețul total de producție, după cum au fost stabilite inițial cu editorul.\n" +
                "        Când toate serviciile sunt acoperite, producătorii demarează execuția acestora. După realizarea produsului\n" +
                "        final, editorul îl va încărca pe fluxul de distribuție/promovare. Acest produs va purta un cod special și, la\n" +
                "        fiecare vânzare a unei unități, platforma va direcționa sume către părți în cuantumurile stabilite.\n" +
                "        Audiotext isi propune să fie mai mult decât o aplicație, își proune să devina un ecosistem care să\n" +
                "        cuprindă toate entitățile implicate în creatia de mmedia audio bazata pe servicii de voce, dar și\n" +
                "        de exemplu a serviciilor de ilustrație de carte de care editurile au nevoie.")}
        </Article>
));