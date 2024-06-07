import * as S from "./style"


export default function Navbar() {
    return (
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Nav>
                <S.Link>Link 1</S.Link>
                <S.Link>Link 2</S.Link>
                <S.Link>Link 3</S.Link>
                <S.Link>Link 4</S.Link>

                <S.Button>Button</S.Button>
                <S.Button bgColor="black">Button</S.Button>
            </S.Nav>
        </S.Container>

    )
}