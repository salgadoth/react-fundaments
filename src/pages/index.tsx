import Pagina from "@/components/template/Pagina";
import Menu from "@/components/template/Menu";
import Linha from "@/components/layout/Linha";
import MenuItem from "@/components/template/MenuItem";

import { IconClock, IconSourceCode, IconTable, IconArrowsDiff, IconComponents, IconH1, IconClick, IconSitemap, IconArrowMoveDown, IconArrowMoveUp, IconNumbers, IconDatabase, IconRefresh, IconRotate2 } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
            <MenuItem 
                icon={<IconSourceCode />}
                url="/hora.html"
                className="bg-gradient-to-r from-red-500 to-yellow-500">
                  Hora Certa (Estático)
            </MenuItem>
            <MenuItem 
                icon={<IconSourceCode />}
                url="/horaAtual.html"
                className="bg-gradient-to-r from-red-500 to-yellow-500">
                  Hora com JS (Dinâmico)
            </MenuItem>
            <MenuItem 
                icon={<IconClock />}
                url="/horaAtual.html"
                className="bg-gradient-to-r from-red-500 to-yellow-500">
                  Hora (API)
            </MenuItem>
            <MenuItem 
                icon={<IconTable />}
                url="/api/tabela"
                className="bg-gradient-to-r from-red-500 to-yellow-500">
                  Gerador Tabela (API)
            </MenuItem>
            <MenuItem 
                icon={<IconArrowsDiff />}
                url="/api/users"
                className="bg-gradient-to-r from-red-500 to-yellow-500">
                  Usuários (API)
            </MenuItem>
          </Linha>
          <Linha>
            <MenuItem 
                icon={<IconComponents />}
                url="/examples/simples"
                className="bg-gradient-to-r from-cyan-500 to-red-500">
                  Componente Simples
            </MenuItem>
            <MenuItem 
                icon={<IconH1 />}
                url="/examples/basico"
                className="bg-gradient-to-r from-cyan-500 to-red-500">
                  Componente Básico
            </MenuItem>
            <MenuItem
                icon={<IconClick />}
                url="/examples/evento"
                className="bg-gradient-to-r from-cyan-500 to-red-500">
                  Eventos
            </MenuItem>
            <MenuItem
                icon={<IconSitemap />}
                url="/examples/filhos"
                className="bg-gradient-to-r from-cyan-500 to-red-500"
            >
                Filhos
            </MenuItem>
            <MenuItem
                icon={<IconArrowMoveDown />}
                url="/examples/direta"
                className="bg-gradient-to-r from-cyan-500 to-red-500"
            >
                Comunicação Direta
            </MenuItem>
            <MenuItem
                icon={<IconArrowMoveUp />}
                url="/examples/indireta"
                className="bg-gradient-to-r from-cyan-500 to-red-500"
            >
                Comunicação Indireta
            </MenuItem>
        </Linha>
        <Linha>
          <MenuItem
              icon={<IconNumbers />}
              url = "/examples/estado"
              className="bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Com Estado
          </MenuItem>
          <MenuItem
            icon={<IconDatabase />}
            url="/examples/contexto"
            className="bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Contexto Compartilhado
          </MenuItem>
          <MenuItem
            icon={<IconRotate2 />}
            url="/examples/promocoes"
            className="bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Conteúdo ServerSide
          </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
    )
}
