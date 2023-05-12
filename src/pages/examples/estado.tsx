import Formulario from "@/components/examples/estado/Formulario";
import Minimo from "@/components/examples/estado/Minimo";
import Pagina from "@/components/template/Pagina";

export default function PaginaEstado(){
    return(
        <Pagina>
            <Minimo></Minimo>
            <Formulario></Formulario>
        </Pagina>
    )
}