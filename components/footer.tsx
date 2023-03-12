import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with &hearts; by Jefferson Chen
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/chenjefferson/"
              className="mx-3 font-bold hover:underline"
            >
              LinkedIn
            </a>
            <div className="hidden lg:inline-block">|</div>
            <a
              href="https://www.instagram.com/jeffwilliamchen/"
              className="mx-3 font-bold hover:underline"
            >
              Instagram
            </a>
            <div className="hidden lg:inline-block">|</div>
            <a
              href="https://github.com/PandaGnar"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
