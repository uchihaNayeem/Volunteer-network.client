import React from 'react';
import TaskDetail from '../TaskDetail/TaskDetail';


const tasks = [
  {
    name: 'Animal Shelter',
    pic: 'animalShelter.png'
  },
  {
    name: 'Baby Sit',
    pic: 'babySit.png'
  },
  {
    name: 'Child Support',
    pic: 'childSupport.png'
  },
  {
    name: 'Clean Water',
    pic: 'cleanWater.png'
  },
  {
    name: 'Clean Park',
    pic: 'clearnPark.png'
  },
  {
    name: 'Cloth swap',
    pic: 'clothSwap.png'
  },
  {
    name: 'drive Safety',
    pic: 'driveSafety.png'
  },
  {
    name: 'Extra Volunteer',
    pic: 'extraVolunteer.png'
  },
  {
    name: 'Food Charity',
    pic: 'foodCharity.png'
  },
  {
    name: 'Good Education',
    pic: 'goodEducation.png'
  },
  {
    name: 'IT Help',
    pic: 'ITHelp.png'
  },
  {
    name: 'library Books',
    pic: 'libraryBooks.png'
  },
  {
    name: 'Music Lessons',
    pic: 'musicLessons.png'
  },
  {
    name: 'New Books',
    pic: 'newBooks.png'
  },
  {
    name: 'Refuse Shelter',
    pic: 'refuseShelter.png'
  },
  {
    name: 'River Clean',
    pic: 'riverClean.png'
  },
  {
    name: 'School Suffiles',
    pic: 'schoolSuffiles.png'
  },
  {
    name: 'Study Group',
    pic: 'studyGroup.png'
  },
  {
    name: 'Stuffed Animals',
    pic: 'stuffedAnimals.png'
  },
  {
    name: 'Vote Register',
    pic: 'voteRegister.png'
  }
];

const Home = () => {
  return (
    <div>
      <div className="text-center mt-5">
                <h1> <b>I GROW BY HELPING PEOPLE IN NEED.</b></h1>
                <br />
                <input type="text" placeholder=" Search...." className="search-box" />
                <button className="search btn btn-primary">Search</button>
      </div>
      <div className="row">
        {
          tasks.map(task => <TaskDetail task={task}></TaskDetail>)
        }
      </div>
    </div>
  );
};

export default Home;