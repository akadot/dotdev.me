import Home from '../../pages/index'

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

describe("General Test",  () => {
    it("Renders home screen", () => {
        render(<Home />);
        expect(screen.getByTestId("jest-test")).toBeInTheDocument();
    })
})