import Navbar from "@/components/Navbar/Navbar"
import Table from "@/components/Table/Table"

const page = () => {
  return (
  <div>
    <Navbar/>
    <div className="mt-4 mx-auto max-w-[80%]">
      <h2 className="text-xl">
      1302 Pokemons In Total
    </h2>
    <Table/>
    </div>
  </div>

  )
}

export default page