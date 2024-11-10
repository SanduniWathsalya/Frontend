import React, { useState, useEffect } from 'react'; 
import { Pie } from 'react-chartjs-2';  // Importing Pie component if needed elsewhere
import { Link } from 'react-router-dom';
import './admindashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';  // Import axios for HTTP requests

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  
  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Students Login',
        backgroundColor: '#4a47a3',
        data: [300, 200, 300, 400, 250, 350, 150]
      }
    ]
  };

  const [chartImage, setChartImage] = useState(null);  // State to hold the chart image

  useEffect(() => {
    const fetchChartImage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/chart2', {
          responseType: 'blob',  // Expecting a blob response
        });
        const imageUrl = URL.createObjectURL(response.data);  // Create a URL for the blob
        setChartImage(imageUrl);  // Set the image URL in state
      } catch (error) {
        console.error('Error fetching the chart image:', error);
      }
    };

    fetchChartImage();  // Call the function to fetch the chart image
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Dashboard</h1>
      <div className="cards">
        <Link to="/registered-students" className="card">
          <div className="card-content">
            <img src="student icon.jpg" alt="Registered Students Icon" className="icon" />
            <div className="text">
              <span className="card-title">All registered students</span>
              <span className="count">250</span>
            </div>
          </div>
        </Link>
        <Link to="/new-students" className="card">
          <div className="card-content">
            <img src="inst icon.jpg" alt="Registered Students Icon" className="icon" />
            <div className="text">
              <span className="card-title">All registered Institutes</span>
              <span className="count">150</span>
            </div>
          </div>
        </Link>
        <Link to="/registered-teachers" className="card">
          <div className="card-content">
            <img src="teacher icon.jpg" alt="Registered Students Icon" className="icon3" />
            <div className="text">
              <span className="card-title">All registered Teachers</span>
              <span className="count3">50</span>
            </div>
          </div>
        </Link>
        <Link to="/payments" className="card">
          <div className="card-content">
            <img src="card.jpg" alt="Registered Students Icon" className="icon" />
            <div className="text4">
              <span className="card-title4">Payments</span>
            </div>
          </div>
        </Link>
      </div>
        <div className="charts">
        <div className="chart2">
          <h2>Students' activation</h2>
          {chartImage && <img src={chartImage} alt="Students' Activation Chart" />}  {/* Render the chart image */}
        </div>
        <div className="chart">
          <h2>Students' login</h2>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
