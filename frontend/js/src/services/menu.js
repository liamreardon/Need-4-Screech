import app from "../app"
import APP_WINDOWS from "../../enums/app_windows"
import profileService from "./profile"

/**
 * Shows the menu items for the given menu label
 * 
 * @param {*} menu The label of the menu/sub-menu to be set as active
 */
const goToMenu = (menu) => {
    _menuState.activeMenu = menu
    _menuState.selectedItemIndex = 0
}

/**
 * Gets the children items for the active menu
 */
const getActiveMenuItems = () => {
    const { activeMenu } = _menuState
    
    if(activeMenu === "Main"){
        //Return the main menu items
        return ["Campaign", "Profile", "Level Editor", "Instructions"]
    }

    //Return the children of the active menu
    return _menuOptions[activeMenu].children
}

/**
 * Gets the index of the selected item
 */
const getSelectedItemIndex = () => {
    return _menuState.selectedItemIndex
}

/**
 * Handles key inputs for the menu window
 */
const handleKeyPress = (event) => {
    if(event.keyCode === 38){ _shiftSelectedItemUp() } //Up Arrow Key
    else if(event.keyCode === 40){ _shiftSelectedItemDown() } //Down Arrow Key
    else if(event.keyCode === 13){ _triggerSelectedItem() } //Enter Key
    else if(event.keyCode === 27){ goToMenu("Main") } //Escape Key
    console.log(event)
}

//--------------Private Variables and Functions------------//

const _shiftSelectedItemDown = () => {
    const numOfItems = getActiveMenuItems().length
    _menuState.selectedItemIndex = (_menuState.selectedItemIndex + 1) % numOfItems
}

const _shiftSelectedItemUp = () => {
    const numOfItems = getActiveMenuItems().length
    _menuState.selectedItemIndex = (_menuState.selectedItemIndex - 1) % numOfItems
}

const _triggerSelectedItem = () => {
    const menuItems = getActiveMenuItems()
    const selectedItem = menuItems[getSelectedItemIndex()]
    _menuOptions[selectedItem].handler() //call the handler of the selected item
}

const _menuOptions = {
    "Campaign": {handler: () => app.switchToWindow(APP_WINDOWS.OVERWORLD), children: []},
    "Profile": {handler: () => goToMenu("Profile"), children: ["Change Password"]},
    "Level Editor": {handler: () => app.switchToWindow(APP_WINDOWS.LEVEL_EDITOR), children: []},
    "Instructions": {handler: () => app.switchToWindow(APP_WINDOWS.INSTRUCTIONS), children: []},
    "Change Password": {handler: () => app.switchToWindow(APP_WINDOWS.PROFILE), children: []}
}

const _menuState = {
    activeMenu: "Main",
    selectedItemIndex: 0
}

export default {
    goToMenu,
    getActiveMenuItems,
    getSelectedItemIndex,
    handleKeyPress
}