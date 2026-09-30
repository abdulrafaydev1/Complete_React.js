import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobs = [
    {
      companyLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      jobTitle: "Frontend Developer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      jobTitle: "Software Engineer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      jobTitle: "UI/UX Designer",
      jobType: "Part Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      jobTitle: "Backend Developer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      jobTitle: "React Developer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      jobTitle: "Product Designer",
      jobType: "Part Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      jobTitle: "Web Developer",
      jobType: "Part Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      jobTitle: "Graphic Designer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      jobTitle: "Software Developer",
      jobType: "Full Time"
    },
    {
      companyLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      jobTitle: "Data Analyst",
      jobType: "Part Time"
    }
  ];


  return (
    <>
      <div className='perent'>
        {jobs.map(function (el) {
          return <Card el />
        })}
      </div>
    </>
  )
}

export default App

