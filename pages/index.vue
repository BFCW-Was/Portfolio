<template>
    <main>
        <h1>Bastián Contreras Wasilkowski</h1>
        <h3>Este portfolio aún está en desarrollo 😁</h3>
        <br>
        <div>
            <h4>Aún así, si deseas contactarme puedes hablarme por correo o mis redes sociales:</h4>
            <v-row class="ms-4 mt-2 ga-2">
                <!-- Email -->
                <v-col class="pa-0" cols="12">
                    <SnippetsClipboardTooltip text="basticontrewasil@gmail.com">
                        <v-btn aria-label="Copiar correo">
                            <v-icon class="mr-3">fa-solid fa-envelope</v-icon>
                            <span>Email</span>
                        </v-btn>
                    </SnippetsClipboardTooltip>
                </v-col>
                <!-- Linkedin -->
                <v-col class="pa-0" cols="12">
                    <v-btn href="https://www.linkedin.com/in/basti%C3%A1ncontreraswasilkowski/" target="_blank" aria-label="Linkedin">
                        <v-icon class="mr-3">fa-brands fa-linkedin</v-icon>
                        <span>Linkedin</span>
                    </v-btn>
                </v-col>
                <!-- GitHub -->
                <v-col class="pa-0" cols="12">
                    <v-btn href="https://github.com/BFCW-Was" target="_blank" aria-label="Github">
                        <v-icon class="mr-3">fa-brands fa-github</v-icon>
                        <span>Github</span>
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </main>
</template>