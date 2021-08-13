import {shallow} from "enzyme";
import Accordion from "../../components/Accordion";

describe("Pruebas en el archivo Accordion.js", ()=> {
    const wrapper = shallow(<Accordion />)

    test("Debe de renderizar correctamente", () => {
        expect(wrapper).toMatchSnapshot()
    })

    test("Debe de mostrar 4 elementos AccordionItem", () => {
        expect(wrapper.find("AccordionItem").length).toBe(4)
    })

    test("Debe de mostrar la imagen correcta", () => {
        const url = "/assets/images/illustration-box-desktop.svg"
        const imgSrc = wrapper.find(".img-arroba").prop("src")

        expect(url).toBe(imgSrc)
    })
})