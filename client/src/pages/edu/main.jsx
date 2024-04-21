import React from 'react';
import './main.css';

import dombyra from '../../assets/file.png';
import qobyz from '../../assets/qobyz-kobyz_634064-64_prev_ui.png';

import { Link } from 'react-router-dom';



function CourseButton({ title, icon, onClick }) {
    return (
      <button className="course-button" onClick={onClick}>
        <img src={icon} className="button-icon" /> {/* Added image tag */}
        {title}
      </button>
    );
  }
  
function CourseLink({ title, description, image, onClick }) {
    return (
      <div className="course-card">
        <img src={image} alt={title} className="course-image" />
        <div className="course-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link to="https://www.youtube.com/watch?v=eLSdZ_H3mSo">
        <button className="course-button" onClick={onClick}>
        Бастау
        </button>
        </Link>
      </div>
    );
  }
  
  function CourseGrid() {
    // Replace with your actual course data
    const courses = [
      {
        title: 'Қобыз',
        description: 'жаңадан бастаушыларға арналған курс',
        image: qobyz, // Replace with your image URL
        onClick: () => console.log('Clicked Math 101'),
      },
      {
        title: 'Домбыра',
        description: 'жаңадан бастаушыларға арналған курс',
        image: dombyra, // Replace with your image URL
        onClick: () => console.log('Clicked Science for Beginners'),
      },
      {
        title: 'Қобыз',
        description: 'тереңдетілген курс',
        image: qobyz, // Replace with your image URL
        onClick: () => console.log('Clicked History of Art'),
      },
      {
        title: 'Домбыра',
        description: 'тереңдетілген курс',
        image: dombyra, // Replace with your image URL
        onClick: () => console.log('Clicked Creative Writing'),
      },
    ];
  
    return (
      <div className="course-grid">
        {courses.map((course) => (
          <CourseLink key={course.title} {...course} />
        ))}
      </div>
    );
  }
  

function Dashboard() {
  return (
    <div className="dashboard">
        <Link to="">
        <CourseButton title="Аккаунт" />
        </Link>
        <Link to="/dombyra">
        <CourseButton title="Тюнер" />
        </Link>
        <Link to="/game">
        <CourseButton title="Ойын" />
        </Link>
        <Link>
        <CourseButton title="Настройки" />
        </Link>
      

    </div>
  );
}


export const Edu = () => {
  return (
    <div className="app">
      <Dashboard />
      <CourseGrid />
    </div>
  );
}

