import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { EducacionComponent } from './components/secciones/educacion/educacion.component';
import { HabilidadesComponent } from './components/secciones/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/secciones/experiencia/experiencia.component';
import { ProyectosComponent } from './components/secciones/proyectos/proyectos.component';
import { AcercadeComponent } from './components/secciones/acercade/acercade.component';
import { CarrouselComponent } from './components/secciones/proyectos/carrousel/carrousel.component';

import { Proyecto1Component } from './components/secciones/proyectos/carrousel/proyecto1/proyecto1.component';
import { Proyecto2Component } from './components/secciones/proyectos/carrousel/proyecto2/proyecto2.component';
import { Proyecto3Component } from './components/secciones/proyectos/carrousel/proyecto3/proyecto3.component';
import { Proyecto4Component } from './components/secciones/proyectos/carrousel/proyecto4/proyecto4.component';
import { Proyecto5Component } from './components/secciones/proyectos/carrousel/proyecto5/proyecto5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PerfilComponent,
    SeccionesComponent,
    EducacionComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    AcercadeComponent,
    CarrouselComponent,
    Proyecto5Component,
    Proyecto1Component,
    Proyecto2Component,
    Proyecto3Component,
    Proyecto4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
