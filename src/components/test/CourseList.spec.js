
/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import CourseList from '../CourseList'


it("Test Course List Component", () => {
  const courses = [{
   "id": 1,
   "title": "Cypress.io",
   "description": "A full Cypress Course from scratch to master",
   "price": 20,
   "videos": 120,
   "isQA": true,
   "image": "https://images.unsplash.com/photo-1576702438167-5341af8f0c13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  }, {
   "id": 2,
   "title": "Cypress.io",
   "description": "A full Cypress Course from scratch to master",
   "price": 20,
   "videos": 120,
   "isQA": true,
   "image": "https://images.unsplash.com/photo-1576702438167-5341af8f0c13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  }]
  const filteredCourses = ""
  mount(<CourseList data={courses} filtered={filteredCourses} />)
})


