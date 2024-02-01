"use client"
import { useEffect, useState } from "react";
import AddQuestionArea from "./AddQuestionArea";
import AddSurveyForm from "./AddSurveyForm";

function CreateSurveyPage() {
  
  const [formData, setFormData] = useState({})
  const [surveyInitialInfo, setSurveyInitialInfo] = useState({})
  const [showQuestionArea, setShowQuestionArea] = useState(false)


  useEffect(()=> {
    const surveyInitialObject = JSON.parse(localStorage.getItem("my_survey"))
    setSurveyInitialInfo(surveyInitialObject)
    setShowQuestionArea((typeof surveyInitialObject === "object"))
  },[])

  return (
    <div className="w-full flex justify-center">
    {
      !showQuestionArea ?
      <AddSurveyForm setFormData={setFormData} setShowQuestionArea={setShowQuestionArea} />
      : null
    }

      {
        showQuestionArea
         ?
      <AddQuestionArea formData={formData} setShowQuestionArea={setShowQuestionArea} setFormData={setFormData} surveyInitialInfo={surveyInitialInfo}
      setSurveyInitialInfo={setSurveyInitialInfo} />
      : null
      }
    </div>
  )
}

export default CreateSurveyPage