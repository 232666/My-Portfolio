import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const portfolios = [
      {
        id: 1, 
        title: "Full-stack academic project", 
        description: `This is the last project that I had to make to acquire analyst system title at University, 
                      it was developed by two persons. It was used the reflection technology to create an independent cross-functionalities 
                      which it can be created by third parties. In another hands, it was developed the front-end that it visible in this photo, 
                      through angular framework, where the communication is by api verbs against .Net Core api Rest-Full. Related with the data base,
                      it was used the entity framework core with the code first focus, but my classmate and I used one data base concept called index
                      tables, therefore, it wasn't totally tapped the entity framework core technology given that it isn't automatic to use the indexes.
                      The ide used was Visual Studio 2019`,
        link: "https://gitlab.com/billaresdiego/full-stack-academic-project",
        image: "/assets/images/Aplication-full-stack.png"
      },
      {
        id: 2,
        title: "E-Commerce website",
        description: `The e-commerce was developed with html, css, typescript and angular framework on StackBlitz, 
                      which it is an online ide technology. 
                      It is a simple application focused on angular framework, 
                      where it is possible to apply the first concepts linked with angular tools like a directive, http request, observable, 
                      form and more. In this app, it is possible to add the products on buy-cart, 
                      where there are three phones to buy on the web store. And, in the future with an api, 
                      you can share these products on sale with anybody you want, for example, through social media.`,
        link: "https://github.com/232666/angular-ecommerce-store",
        image: "/assets/images/E-commerce-website.png"
      },
      {
        id: 3,
        title: "Tour of heroes app",
        description: `This app born like a tutorial that I had to do. Perhaps, the application seems very easy to create, 
                      but inside of app, there are a lot of elements from angular framework like directives, pipes, services, 
                      decorations, and more useful tools which you can see in the next link below of this description. 
                      This app is prepared to use with an api, therefore, 
                      it was implemented the http functionalities with the corresponding verbs. 
                      This was possible because I used the Angular "in memory web api" proportioned by angular framework to develop a correct app 
                      ready to work. In this app, you can add, modify, delete and get (CRUD requests) any hero that you want. 
                      For other way, you can see a dashboard with first five heroes and a better visual than the hero list. 
                      The last functionality, you can filter heroes that you want to see.`,
        link: "https://gitlab.com/billaresdiego/tour-of-heores-angular.git",
        image: "/assets/images/tour-of-heroes.png"
      },
      {
        id: 4,
        title: ".Net application for desktop",
        description: `It is another application that I made at University. The app was my first time with the c# programming language, 
                      and it is a very interesting app to see. It was developed with the entity framework technology, 
                      therefore, this app has a data base which was created with the code first approach. 
                      In this application, the focus was to create an alarm of authors is deployed when determinate post had a certain number of positive, 
                      negative or neutral comments. This is an alarm which it is deployed when the comments amount are determinate.`,
        link: "https://gitlab.com/billaresdiego/proyecto.netc",
        image: "/assets/images/communication-diagram-of-app.png"
      },
      {
        id: 5,
        title: "MongoDb and Pl-Sql Oracle project",
        description: `Model of data bases were applied in this University project. Here, 
                      it was developed two separate parts of a system that it wasn't our responsibility to create, 
                      the approach here is only the data bases model and implementation which I had to created with two more classmates. 
                      We had to recognize what part of the data base system belonged MongoDb development (it is a no relation model) and for another way, 
                      which belonged Pl-Sql development (it is a relational model). Over the Pl-Sql, 
                      we had to use many tools proportionate by Sql language, like a table, foreign keys, primary keys, triggers, checks fields, and 
                      in other words structural constraints, no structural constraints and integrity constraints. 
                      In MongoDb, we created flexible documents where you can put the fields that you whatever you want, although, 
                      it was required specifics fields in determinate document which you want to add. 
                      Also, we used the embedded to specify some document into another.`,
        link: "https://gitlab.com/billaresdiego/mongodb-and-pl-sql-project",
        image: "/assets/images/part-sql-model.png"
      },
      {
        id: 6,
        title: "Smart purchase project Django",
        description: `It was a project that I had to do for a national program in my country, 
                      endorsed by CUTI entity (Cámara Uruguaya de Tecnologías de la Información or Uruguayan camera of information technologies). 
                      I made this app with a team of four persons more. We had to think the idea since first time, 
                      it was a requirement to start the project. The final project derive in an e-commerce with several functionalities. 
                      You can register and login on the app, also, you can select the product that you want to buy, 
                      which the app calculate amount of these products that you want to get. Finally, you can see the historical buys, where, 
                      it is stored on the data base model created in administration portal Django.`,
        link: "https://gitlab.com/billaresdiego/smart-purchase-project-django",
        image: "/assets/images/smart-purchase.png"
      },
      {
        id: 7,
        title: "Smart purchase project mobile",
        description: `This is the e-commerce before mentioned, although, it was developed for Mobile devices. 
                      The development was carried out by Android studio environment, 
                      where it was programmed on java programming language related with the behavior of front-end. By another way, 
                      if we speak of the style, in this environment is necessary to know about xml language. Related with the back-end, 
                      it was developed by a member of my team, which two persons and I belonged to the first Django project. Finally, 
                      this app contemplates the major number of functionalities in the first project, and given that the back-end is separate like api, 
                      it is possible to communicate with the app through computer and mobile.`,
        link: "https://gitlab.com/billaresdiego/smartpurchaseproject",
        image: "/assets/images/smart-purchase-mobile.png"
      },
      {
        id: 8,
        title: "My GitLab repository",
        description: `To finish, here is the link to my repository, where you can see every project that 
                      I have created during this time. There are more projects than I published here, so, 
                      you can see more about my learning on the next links below. I am trying to upload every project that I am doing`,
        link: "https://gitlab.com/dashboard/projects",
        image: "/assets/images/repository-projects.png"
      },
      {
        id: 9,
        title: "My GitHub repository",
        description: `In this repository, it is where I worked at University, Therefore, you can see more about my work here, Although,
                      It is not my focus where I upload every project that I am doing already.`,
        link: "https://github.com/232666?tab=repositories",
        image: "/assets/images/git-hub-repository.png"
      }
    ];
    return {portfolios};
  }

  //It will be useful when it be implemented post verb of api rest-full
  genId(portfolios: Portfolio[]): number {
    return portfolios.length > 0 ? Math.max(...portfolios.map(portfolio => portfolio.id)) + 1 : 1;
  }
}