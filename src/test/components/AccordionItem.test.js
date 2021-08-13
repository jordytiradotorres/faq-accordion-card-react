import { shallow } from "enzyme";
import AccordionItem from "../../components/AccordionItem";

describe("Pruebas en el archivo AccordionItem.js", () => {
    const title = "titulo";
    const description = "descripcion ";

    const wrapper = shallow(
        <AccordionItem title={title} description={description} />
    );

    test("Debe de renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deben de coincidir el contenido del h3 y el p", () => {
      const h3Text = wrapper.find("h3").text()
      const pText = wrapper.find(".parrafo").text()

      expect(h3Text).toBe(title)
      expect(pText).toBe(description)
  })
});
