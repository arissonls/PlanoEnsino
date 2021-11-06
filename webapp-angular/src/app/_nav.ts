import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Turmas'
  },
  {
    name: 'Minhas turmas',
    url: '/turma/listar',
    icon: 'fa fa-users'
  },
  {
    name: 'Cadastrar turmas',
    url: '/turma/cadastrar',
    icon: 'fa fa-plus'
  },
  {
    title: true,
    name: 'Planos de aula'
  },
  {
    name: 'Meus planos',
    url: '/plano-aula/listar',
    icon: 'cil-library'
  },
  {
    name: 'Criar plano de aula',
    url: '/plano-aula',
    icon: 'fa fa-plus',
    children: [
      {
        name: 'Ensino Fundamental',
        url: '/plano-aula/fundamental',
        icon: 'icon-puzzle'
      },
      {
        name: 'Ensino Médio',
        url: '/plano-aula/medio',
        icon: 'icon-puzzle'
      },
      {
        name: 'Séries Iniciáis',
        url: '/plano-aula/iniciais',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'Relatórios'
  },
  {
    name: 'Relatórios',
    url: '/relatorios',
    icon: 'icon-cursor'
  }

];
