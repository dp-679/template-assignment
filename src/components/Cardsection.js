import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          Which fruit you want! 
          <span>&#128523;</span>
        </h2>
        <div className="row">
           <Card image="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg" cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"></Card>
           <Card image="https://i.dlpng.com/static/png/6978959_preview.png" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"></Card>
           <Card image="https://assets.reflections.live/1618044188890-knbhmi3s.jpeg" cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"></Card>
        </div>
      </div>
    </section>
  )
}
export default CardSection 
