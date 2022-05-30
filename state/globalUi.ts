import { proxy } from 'valtio';

interface IStateGlobalUi {
  showMobileMenu: boolean
}

const stateGlobalUi = proxy<IStateGlobalUi>({
  showMobileMenu: false
})

const toggleShowMobileMenu = (): void => {
  stateGlobalUi.showMobileMenu = !stateGlobalUi.showMobileMenu;
}

export {
  stateGlobalUi,
  toggleShowMobileMenu
}
