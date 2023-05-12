import Caixa from "@/components/filhos/Caixa";
import Grade from "@/components/filhos/Grade";
import Pagina from "@/components/template/Pagina";

export default function FilhosPagina(){
    return(
    <Pagina>
        <Grade>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            <Caixa>#6</Caixa>
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>
        </Grade>
    </Pagina>)
}