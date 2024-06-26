"use client"

import React , {useState} from "react";
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {FormFile} from "@/components/component/form-file"



export default function Home () {

const [taille,setTaille] = useState("");
const [poids,setPoids] = useState("");
const [imc,setImc] = useState(0);
const [mesure,setMesure] = useState("metre");


const calcule = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
const tailleEnMetre = mesure === "centimetre" ? parseFloat(taille)/100 : parseFloat(taille);
const poidsEnKg = parseFloat(poids);
const imcCalcul = poidsEnKg / (tailleEnMetre * tailleEnMetre);
setImc(imcCalcul);


}

return (

<main className="w-full h-screen bg-slate-100 flex justify-center items-center">

<div className="w-[85vh] h-[75vh]">


<form  onSubmit={calcule} className="w-full h-full rounded-md border border-purple-200 shadow-xl p-8 bg-slate-300 flex justify-center items-center flex-col gap-4">
<h1 className="font-semibold text-2xl text-center mb-4">Calculateur de IMC</h1>


<Input  type="text" name="taille" value={taille} onChange={(e) => setTaille(e.target.value)} required placeholder="Entrez votre taille"  className="w-15 h-10 rounded-md border border-gray-300 px-4"/>


<Select value={mesure} onValueChange={(e : any) => { console.log(e) ;setMesure(e)}}>

  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Unité de mesure" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="metre">metre(m)</SelectItem>
    <SelectItem value="centimetre">centimetre(cm)</SelectItem>
  </SelectContent>

</Select>

<Input  type="text" name="poids"  value={poids} onChange={(e) => setPoids(e.target.value)}
 placeholder="Entrez votre poids"  className="w-15 h-10 rounded-md border border-gray-300 px-4"/>


<Button variant="outline" type="submit">Calculer</Button>

{imc > 0 && <p className="text-md font-semibold ">Votre IMC est : {imc}</p>}

</form>
</div>
</main>

);
}