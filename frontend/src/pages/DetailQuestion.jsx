import React from 'react'
import { Layout } from '../components/Layout'
import Answer from '../components/Query-Section/Answer'
import DetailedQuestionSection from '../components/Query-Section/DetailedQuestionSection'

function DetailQuestion() {
  return (
    <Layout>
        <DetailedQuestionSection></DetailedQuestionSection>
        <Answer></Answer>
    </Layout>
  )
}

export default DetailQuestion