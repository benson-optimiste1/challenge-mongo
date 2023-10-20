import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const animalDb = db.collection('animal');

const theAnimal = {
    type: 'Dog',
    breed: 'molosses',
    color: 'black',

}
// add a animal
export async function addAnimal() {
    const animalAdded = await db.collection('animal').insertOne(theAnimal);
    console.log('animalAdded ->', animalAdded)
}

// get all animals
export async function getAllAnimal(){
    const animalList = await db.collection('animal').find({}).toArray();
    console.table(animalList);
}

// update animal

export async function updateOneAnimal(){
    const cleanId = new ObjectId ('6532bf8491acce28fd62066e')
    const dataToUpdate = { type: 'Cat', breed: 'haitian', color: 'white' }
    const updatedAnimal = await animalDb.findOneAndUpdate({ _id: cleanId }, {$set: dataToUpdate})
    console.log('updateAnimal ->', updatedAnimal)
}

// delete a animal
export async function deleteAAnimal(){
    const myCleanId = new ObjectId('6532bcc23f57629009688752')
    const deleteAAnimal = await db.collection('animal').findOneAndDelete({_id: '6532bcc23f57629009688752'})
    console.log('deleteAAnimal ->', deleteAAnimal)
}