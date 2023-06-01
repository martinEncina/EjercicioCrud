const Comida = require("../models/comida.model")

const getComidasPepe = (req, res) => {
    res.send('este es el get comidas');
  }

  const getComidas = async (req, res) => {
    try {
        allComidas = await Comida.find();
        return res.status(200).json(allComidas);
    } catch (error) {
        return res.status(500).json(error);
    }
  }

const postComidas = async (req, res) => {
    try {
        console.log(req.body);
        const newComida = new Comida(req.body);
        const createdComida = await newComida.save();
        return res.status(201).json(createdComida);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putComidas = (req, res) => {
    res.send('este es el putComidas comidas');
}

const deleteComidas = (req, res) => {
    res.send('este es el delete comidas');
}


  module.exports = {getComidasPepe, getComidas, postComidas,putComidas,deleteComidas}