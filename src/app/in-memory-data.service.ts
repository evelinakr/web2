import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Department } from './department';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, department_id: 1, department_name: "Storyboarding", name: 'Creating the Story', description: 'Usually it’ made from the Art director. He is creating the story from scratches and create the first ideas for the look of the heroes and the environment that will be created in the animation will be.', employees: [1, 9], employeesByName: ["John Roberts", " Peter Thompson"], due_date: '01/05/2020' },
      { id: 2, department_id: 1, department_name: "Storyboarding", name: 'Discussing', description: 'Discusses it with a small team which includes the Art producer and the main animators. They discuss what needed to add or removed from the story, what will happen and how will the characters look like in the story.', employees: [1, 9], employeesByName: ["John Roberts", " Peter Thompson"], due_date: '03/05/2020' },
      { id: 3, department_id: 3, department_name: "Sound Recording", name: 'Recording', description: 'They can be made by anyone from the project that is interested in doing that.  It is called temporary because the sound (the words) of the actors are used from the animators, so they orient easily how to draw the movement of the characters when they have to speak. Those voices are not the originally used ones in the movie, after the creation of the movie.', employees: [10, 11, 12], employeesByName: ["Alice White", " Logan Davies", " Michael Lewis"], due_date: '05/05/2020' },
      { id: 4, department_id: 2, department_name: "Sketch", name: 'Recreating', description: 'The animators who are sketching the movie actually recreate the heroes from the storyboarding after discussion.', employees: [3], employeesByName: ["Walter Davis"], due_date: '10/05/2020' },
      { id: 5, department_id: 2, department_name: "Sketch", name: 'Reformation', description: 'Do superficial changes in the appearance of the characters and the main scenes.', employees: [3], employeesByName: ["Walter Davis"], due_date: '10/05/2020' },
      { id: 6, department_id: 5, department_name: "Layout", name: 'Creating the Layout', description: 'The animators involved in the layout department create additional scenes (to fill the animation), creating the background and emphasize the small details in the film that are very important in helping the viewers understand what is happening in the scenes.', employees: [2], employeesByName: ["Sarah Taylor"], due_date: '13/05/2020' },
      { id: 7, department_id: 4, department_name: "Live Action References", name: 'Action', description: 'Live-action actors are actually used as the sound recorders. They are filming specific movements that are planned to be used for some of the character\'s movements so the animators could represent better and correctly the movements of the heroes in the animation.', employees: [13], employeesByName: ["Martha Evans"], due_date: '15/05/2020' },
      { id: 8, department_id: 6, department_name: "Coloring", name: 'Main Coloring', description: 'It’s time to fill the animation with live! They create the colors in the scenes.', employees: [5], employeesByName: ["Hannah Wilson"], due_date: '15/05/2020' },
      { id: 9, department_id: 6, department_name: "Coloring", name: 'Shadowing', description: 'They put the shadows of the heroes by making them closer to looking like real life, but yet the animation is not ready!', employees: [5], employeesByName: ["Hannah Wilson"], due_date: '16/05/2020' },
      { id: 10, department_id: 7, department_name: "Clean Up Stage", name: 'Assembling', description: 'These animators assembly everything created so far. They assemble the characters with the background, the scenes, and their sequence.', employees: [4], employeesByName: ["Samuel Evans"], due_date: '15/05/2020' },
      { id: 11, department_id: 7, department_name: "Clean Up Stage", name: 'Repairing', description: 'Here the team understands if they have missed something and here they can still repair it before starting with the next parts of the work.', employees: [4], employeesByName: ["Samuel Evans"], due_date: '16/05/2020' },
      { id: 12, department_id: 8, department_name: "Lightning", name: 'The Revival', description: 'The lighting team is animators who take care of the effect of \'life\'. By putting lighting in the animation, it makes the animation feel closer to reality.', employees: [6], employeesByName: ["Daisy Brown"], due_date: '17/05/2020' },
      { id: 13, department_id: 8, department_name: "Lightning", name: 'Underlining', description: 'With lighting, they emphasize certain scenes, and lighting helps viewers to feel the intense scenes, to realize the sense of happiness or sadness that the character feels during different scenes.', employees: [6], employeesByName: ["Daisy Brown"], due_date: '18/05/2020' },
      { id: 14, department_id: 9, department_name: "Texturing", name: 'Shading', description: 'Texturing helps the animation to represent all the feelings that can be felt after watching each scene. They are similar to the lighting, but they actually are the opposite, they add the shades and specific colors of the shades that help the animation.', employees: [7], employeesByName: ["Isaac Walker"], due_date: '20/05/2020' },
      { id: 15, department_id: 9, department_name: "Texturing", name: 'Sharpness', description: 'In these cases the animators most of the time "create" new colors, usually metallic, so they can sharpen different moments in scenes, where the viewers know where they have to look at the screen or to notice where the character is looking.', employees: [7], employeesByName: ["Isaac Walker"], due_date: '22/05/2020' },
      { id: 16, department_id: 10, department_name: "Final Composition", name: 'Checking', description: 'The assembly team assembles what it hasn\'t been assembled till that moment. That\'s the final work where the team checks for mistakes, missing pieces, etc.', employees: [8], employeesByName: ["Susan Wood"], due_date: '25/01/2020' },
      { id: 17, department_id: 10, department_name: "Final Composition", name: 'Final Touch', description: 'They assemble everything and re-watch everything over and over again by checking the project/movie for it\s final presenting, before giving it to the publishing producers.', employees: [8], employeesByName: ["Susan Wood"], due_date: '28/05/2020' },
      { id: 18, department_id: 10, department_name: "Final Composition", name: 'Head Rehearsal', description: 'They gather the main team and watch the full movie. The team has to look for missing pieces, problems that have occurred, mistakes made by the motion of the characters, for the correctness of the scenes, etc.', employees: [8], employeesByName: ["Susan Wood"], due_date: '30/05/2020' }
    ];
    const departments = [
      { id: 1, name: 'Storyboarding', building: 'A', employees: [1, 9], employeesByName: ["John Roberts", " Peter Thompson"] },
      { id: 2, name: 'Sketch', building: 'A', employees: [3], employeesByName: ["Walter Davis"] },
      { id: 3, name: 'Sound Recording', building: 'A', employees: [10, 11, 12], employeesByName: ["Alice White", " Logan Davies", " Michael Lewis"] },
      { id: 4, name: 'Live Action References', building: 'B', employees: [13], employeesByName: ["Martha Evans"] },
      { id: 5, name: 'Layout', building: 'B', employees: [2], employeesByName: ["Sarah Taylor"] },
      { id: 6, name: 'Coloring / Painting', building: 'B', employees: [5], employeesByName: ["Hannah Wilson"] },
      { id: 7, name: 'Clean Up Stage', building: 'B', employees: [4], employeesByName: ["Samuel Evans"] },
      { id: 8, name: 'Lighting', building: 'C', employees: [6], employeesByName: ["Daisy Brown"] },
      { id: 9, name: 'Texturing', building: 'C', employees: [7], employeesByName: ["Isaac Walker"] },
      { id: 10, name: 'Final Composition', building: 'C', employees: [8], employeesByName: ["Susan Wood"] }
    ];
    const employees = [
      { id: 1, department_id: 1, department_name: "Storyboarding", first_name: 'John', last_name: 'Roberts', birth_date: '07/04/1970', gender: 'male', position: 'Director' },
      { id: 2, department_id: 5, department_name: "Layout", first_name: 'Sarah', last_name: 'Taylor', birth_date: '12/05/1968', gender: 'female', position: 'Animator' },
      { id: 3, department_id: 2, department_name: "Sketch", first_name: 'Walter', last_name: 'Davis', birth_date: '10/03/1988', gender: 'male', position: 'Animator' },
      { id: 4, department_id: 7, department_name: "Clean Up Stage", first_name: 'Samuel', last_name: 'Evans', birth_date: '27/10/1979', gender: 'male', position: 'Animator' },
      { id: 5, department_id: 6, department_name: "Coloring", first_name: 'Hannah', last_name: 'Wilson', birth_date: '17/02/1990', gender: 'female', position: 'Animator' },
      { id: 6, department_id: 8, department_name: "Lightning", first_name: 'Daisy', last_name: 'Brown', birth_date: '22/07/1995', gender: 'female', position: 'Animator' },
      { id: 7, department_id: 9, department_name: "Texturing", first_name: 'Isaac', last_name: 'Walker', birth_date: '29/01/1987', gender: 'male', position: 'Animator' },
      { id: 8, department_id: 10, department_name: "Final Composition", first_name: 'Susan', last_name: 'Wood', birth_date: '10/08/1996', gender: 'female', position: 'Art producer' },
      { id: 9, department_id: 1, department_name: "Storyboarding", first_name: 'Peter', last_name: 'Thompson', birth_date: '07/03/1999', gender: 'male', position: 'Art producer' },
      { id: 10, department_id: 3, department_name: "Sound Recording", first_name: 'Alice', last_name: 'White', birth_date: '03/07/1995', gender: 'female', position: 'Voice-giver' },
      { id: 11, department_id: 3, department_name: "Sound Recording", first_name: 'Logan', last_name: 'Davies', birth_date: '21/09/1992', gender: 'male', position: 'Voice-giver' },
      { id: 12, department_id: 3, department_name: "Sound Recording", first_name: 'Michael', last_name: 'Lewis', birth_date: '31/01/1989', gender: 'male', position: 'Voice-giver' },
      { id: 13, department_id: 4, department_name: "Live Action References", first_name: 'Martha', last_name: 'Evans', birth_date: '03/07/1979', gender: 'female', position: 'Temporary actor' }
    ];
    return { tasks, departments, employees };
  }

  // Overrides the genId method to ensure that a task always has an id.
  genIdTasks(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
  genIdDepartments(departments: Department[]): number {
    return departments.length > 0 ? Math.max(...departments.map(department => department.id)) + 1 : 1;
  }
  genIdEmployees(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }

}