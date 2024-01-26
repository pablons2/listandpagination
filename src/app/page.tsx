'use client'
import React, { useEffect, useState } from "react";
import { Input } from "@/components/forms/Input";

export default function Home() {


  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
    setCurrentPage(1); // Reinicia a página ao realizar uma nova pesquisa
  };


const [dataArray, setDataArray] = useState([
{
    "Nome": "Pablo",
    "RG": "3359129-6",
    "CPF": "09541272428",
    "Apelido":"pabloN"
  },
  {
    "Nome": "Ana",
    "RG": "1234567-8",
    "CPF": "98765432100",
    "Apelido": "ana123"
  },
  {
    "Nome": "Carlos",
    "RG": "8765432-1",
    "CPF": "45678901234",
    "Apelido": "carlosC"
  },
  {
    "Nome": "Zara",
    "RG": "9999999-9",
    "CPF": "11111111111",
    "Apelido": "zaraZ"
  },
  {
    "Nome": "Daniel",
    "RG": "7654321-0",
    "CPF": "01234567890",
    "Apelido": "danielD"
  },
  {
    "Nome": "Eva",
    "RG": "9876543-2",
    "CPF": "34567890123",
    "Apelido": "evaE"
  },
  {
    "Nome": "Fernando",
    "RG": "2345678-9",
    "CPF": "56789012345",
    "Apelido": "fernandoF"
  },
  {
    "Nome": "Gabriela",
    "RG": "5432198-7",
    "CPF": "89012345678",
    "Apelido": "gabrielaG"
  },
  {
    "Nome": "Hugo",
    "RG": "3219876-5",
    "CPF": "65432109876",
    "Apelido": "hugoH"
  },
  {
    "Nome": "Isabel",
    "RG": "9876543-2",
    "CPF": "23456789012",
    "Apelido": "isabelI"
  },
  {
    "Nome": "João",
    "RG": "4567890-1",
    "CPF": "78901234567",
    "Apelido": "joaoJ"
  },

])

const filteredData = dataArray.filter((item) => {
  return Object.values(item).some((value) => {
    if (typeof value === "string") {
      return value.toLowerCase().startsWith(searchValue.toLowerCase());
    }
    return false;
  });
});

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

const paginate = (pageNumber: React.SetStateAction<number>) => {
  setCurrentPage(pageNumber);
};

const totalPages = Math.ceil(filteredData.length / itemsPerPage);


const tableFilter = dataArray.filter((item) => {
  return Object.values(item).some((value) => {
    if (typeof value === "string") {
      return value.toLowerCase().startsWith(searchValue.toLowerCase());
    }
    return false;
  });
});



const [formValues, setFormValues] = useState(
  {
    "Nome":"",
    "RG":"",
    "CPF":"",
    "Apelido":""
  }
)

const onSubmit = (e) => {
  e.preventDefault();
  const newData = {
    "Nome": e.target.elements.Nome.value,
    "RG": e.target.elements.RG.value,
    "CPF": e.target.elements.CPF.value,
    "Apelido": e.target.elements.Apelido.value,
  };
  setDataArray([newData, ...dataArray]);
  console.log(dataArray)
  // Clear form values
  setFormValues({
    "Nome": "",
    "RG": "",
    "CPF": "",
    "Apelido": ""
  });
};
// useEffect(() => {
//   // Check if the length of dataArray has changed
//   const hasNewData = dataArray.length !== prevDataArrayLength;

//   // If there is new data, you can perform any actions you need here
//   if (hasNewData) {
//     // For now, let's just log a message to the console
//     console.log("New data added to dataArray. Update the table!");
//   }
// }, [dataArray]);
  return (
    <>
      <div className="w-screen flex flex-col justify-center">

        <form onSubmit={onSubmit} >
      <Input
          name="Nome"
          type="text"
          placeholder="Entre com o nome!"
          // value={undefined}
          classe="border mb-2 "
                  />
          <Input
          name="RG"
          type="text"
          placeholder="Entre com o RG!"
          // value={undefined}
          classe="border mb-2 "
                  />
          <Input
          name="CPF"
          type="text"
          placeholder="Entre com o CPF!"
          // value={undefined}
          classe="border mb-2 "
                  />
          <Input
          name="Apelido"
          type="text"
          placeholder="Entre com o apelido!"
          // value={undefined}
          classe="border mb-2 "
                  />
          <input 
          type="submit" 
          value="Enviar" 
          className="bg-green-600 ps-5 pe-5 pt-2 pb-2 rounded-lg mt-2 mb-2"
         
          />
       </form>
        <Input
          name="busca"
          type="search"
          value={searchValue}
          placeholder="Digite para buscar!"
          onChange={handleSearchChange} 
        />
        <table className="mt-5 w-screen">
          <thead className="w-full">
            <tr className="w-full flex justify-around  bg-slate-600 ">
              <th> Nome</th>
              <th> RG </th>
              <th> CPF </th>
              <th> Apelido </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="w-full flex justify-around bg-green-700 p-2 border bottom-1">
                <td>{item.Nome}</td>
                <td>{item.RG}</td>
                <td>{item.CPF}</td>
                <td>{item.Apelido}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full mt-2 flex justify-center gap-4">
        <button
            className="p-2 bg-zinc-500 rounded-lg"
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          >
            Voltar
          </button>
          <button
            className="p-2 bg-zinc-600 rounded-lg"
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
          >
            Próximo
          </button>
        </div>

      </div>
    </>
  );
}
