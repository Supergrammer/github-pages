import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fa } from "vuetify/iconsets/fa"

import "vuetify/styles";

const vuetify = createVuetify({
    components,
    directives,

    icons: {
        defaultSet: "fa",
        sets: { fa },
    }
});

export default vuetify;