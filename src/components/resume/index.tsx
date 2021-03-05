import { faAt, faCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import { Container } from './components/container';

interface Props { }

export const Resume = (props: Props) => {
    return (
        <Container>
            <Content>
                <PersonalInfo>
                    <PersonalInfoPersonal>
                        <div> <h4>Rafael Casanje</h4> </div>
                        <div> <h5>Front-end Developer</h5> </div>
                    </PersonalInfoPersonal>
                    <PersonalInfoSkills>
                        <div>
                            <div>
                                <div>Residência:</div>
                                <div>Brasil</div>
                            </div>
                            <div>
                                <div>Cidade:</div>
                                <div>Rio de Janeiro</div>
                            </div>
                            <div>
                                <div>Idade:</div>
                                <div>22</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div>
                                <div>Português:</div>
                                <div>Nativo</div>
                            </div>
                            <div>
                                <div>Inglês:</div>
                                <div>Intermediário</div>
                            </div>
                            <div>
                                <div>Espanhol:</div>
                                <div>Básico</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Hard Skills</h4>
                            <div>
                                <div>React</div>
                                <div>React Native</div>
                                <div>NodeJS</div>
                                <div>PHP</div>
                                <div>GIT</div>
                                <div>SASS</div>
                                <div>Typescript</div>
                                <div>Javascript</div>
                                <div>Django</div>
                                <div>Firebase</div>
                                <div>MongoDB</div>
                                <div>PostgreSQL</div>
                                <div>jQuery</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Soft Skills</h4>
                            <div>
                                <div>Boa comunicação</div>
                                <div>Colaboração</div>
                                <div>Relacionamento Interpessoal</div>
                                <div>Proativo</div>
                                <div>Autodidata</div>
                                <div>Concentrado</div>
                                <div>Atencioso</div>
                                <div>Engraçado</div>
                                <div>Autodisciplina</div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Bootstrap</div>
                                <div> Materialize</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Sass</div>
                                <div> Styled Component</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Parcel</div>
                                <div> Webpack</div>
                                <div> Rollup</div>
                            </div>
                            <div>
                                <div> <FontAwesomeIcon icon={faCheck} /> Conhecimento em GIT </div>
                            </div>
                        </div>
                    </PersonalInfoSkills>
                    <PersonalInfoSocial>
                        <div> <a href="https://www.linkedin.com/in/rafael-casanje/" target='_blank' ><FontAwesomeIcon icon={faLinkedin} /></a> </div>
                        <div> <a href="https://github.com/casanej" target='_blank' ><FontAwesomeIcon icon={faGithub} /></a> </div>
                        <div> <a href="https://facebook.com/rafael.casanje" target='_blank' ><FontAwesomeIcon icon={faFacebook} /></a> </div>
                        <div> <a href="https://casanje.com" target='_blank' ><FontAwesomeIcon icon={faAt} /></a> </div>
                    </PersonalInfoSocial>
                </PersonalInfo>
                <PublicInfo>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '5px 0'}}>
                        <Timeline>
                            <h1>Educação</h1>
                            <TimelineItems>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>Bacharel em Ciência da Computação - UNISUAM</TimelineTitleContent>
                                        <TimelineTitleDate>jan/2018 - Presente</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        <div>&nbsp;&nbsp;&nbsp;Trabalhando na elaboração de programas de informática, para computadores ou dispositivos móveis.</div>
                                        <div>&nbsp;&nbsp;&nbsp;Analisa as necessidades dos usuários, desenvolve softwares e aplicativos, gerenciamento equipes de criação e instala sistemas de computação. Cria ferramentas de informática de sistemas de processamento de informações.</div>
                                        <div>&nbsp;&nbsp;&nbsp;Assistência aos usuários, manutenção a redes de computadores e a conexões com a internet. Implantação e gerenciamento bancos de dados e instalar sistemas de segurança da rede.</div>
                                    </TimelineItemContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>Rocketseat GoStack 12</TimelineTitleContent>
                                        <TimelineTitleDate>fev/2020 - set/2020</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        Conhecimento das metodologias e técnicas para o aprendizado envolvendo o treinamento imersivo na linguagem de programação Javascript e seus frameworks e bibliotecas. Utilizando o ecossistema do React, React Native e NodeJS para realizar o desenvolvimento do front-end, back-end e mobile para o usuário final e, por final, realizar o deployment dos mesmos
                                    </TimelineItemContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>Escola Técnica do Estado do Rio de Janeiro - ETERJ</TimelineTitleContent>
                                        <TimelineTitleDate>jan/2015 - dez/2017</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        A grade curricular abordou assuntos de tecnologia computacional, sistemas operacionais, lógica e aritmética, lógica de programação, redes locais, comunicação e administração de redes, gerenciamento de dados, entre outros.
                                    </TimelineItemContent>
                                </TimelineItem>
                            </TimelineItems>
                        </Timeline>

                        <Timeline>
                            <h1>Experiências</h1>
                            <TimelineItems>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>i9 & re9 - Front end Developer</TimelineTitleContent>
                                        <TimelineTitleDate>fev/2020 - Presente</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        <div>Criação e desenvolvimento de softwares de uso interno, criação de website com tecnologias em React e React Native. Criação e manutenção em banco de dados SQL e gerenciamentos de dados para as aplicações em Python (Django)</div>
                                        <div>Tecnologias usadas:</div>
                                        <TechnologiesTags>
                                            <div>ReactJS</div>
                                            <div>React Native</div>
                                            <div>NodeJS</div>
                                            <div>Python</div>
                                            <div>Django</div>
                                            <div>MySQL</div>
                                        </TechnologiesTags>
                                    </TimelineItemContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>Hebara Distribuidora de Produtos Lotéricos  - Front end Developer</TimelineTitleContent>
                                        <TimelineTitleDate>fev/2020 - Presente</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        <div>Criação e desenvolvimento de softwares de uso interno, criação de website com tecnologias em React e React Native. Criação e manutenção em banco de dados SQL e gerenciamentos de dados para as aplicações em Python (Django)</div>
                                        <div>Tecnologias usadas:</div>
                                        <TechnologiesTags>
                                            <div>ReactJS</div>
                                            <div>React Native</div>
                                            <div>NodeJS</div>
                                            <div>Python</div>
                                            <div>Django</div>
                                            <div>MySQL</div>
                                        </TechnologiesTags>
                                    </TimelineItemContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineTitle>
                                        <TimelineTitleContent>INPARTEC - </TimelineTitleContent>
                                        <TimelineTitleDate>out/2018 - fev/2019</TimelineTitleDate>
                                    </TimelineTitle>
                                    <TimelineItemContent>
                                        <div>Desenvolvimento e manutenção em páginas de Wordpress. Criação de layouts e templates em PHP para Wordpress e criação de páginas dinâmicas em XSLT para uso interno da empresa e clientes</div>
                                        <div>Tecnologias usadas:</div>
                                        <TechnologiesTags>
                                            <div>PHP</div>
                                            <div>Wordpress + Plugins</div>
                                            <div>XSLT</div>
                                            <div>MySQL</div>
                                            <div>HTML5</div>
                                            <div>jQuery</div>
                                        </TechnologiesTags>
                                    </TimelineItemContent>
                                </TimelineItem>
                            </TimelineItems>
                        </Timeline>
                    </div>
                    <div style={{margin: 10}}>
                        <h2>Sobre mim</h2>
                        <p style={{fontSize: '1em', margin: '10px 0', textAlign: 'justify' }}>Comecei a gostar da área de informática desde os meus 8 anos e na área de programação em 2012. Sempre procurei novas tecnologias para aprender e me atualizar nesse mundo em constante  atualização. Atualmente estou me especializando na stack do React (React / React Native / NodeJs). Meu objetivo pessoal é desenvolver programas para ajudar pessoas em suas conquistas individuais</p>
                        <p style={{fontSize: '1em', margin: '10px 0', textAlign: 'justify' }}>Meus hobbies na programação consiste em ver como os sistemas e sites atuais funcionam e tentar decifrar os métodos utilizado para o desenvolvimento do mesmo e recriar os jogos antigos, aqueles em flash, para o Javascript usando engines de animação ou vanilla</p>
                        <p style={{fontSize: '1.25em', margin: '10px 0', textAlign: 'justify' }}>{'"Desejo expandir meus conhecimentos diariamente para conquistar clarividência das minha habilidades"'}</p>
                    </div>
                </PublicInfo>
            </Content>
        </Container>
    );
};

const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const Divider = styled.div`
    background: #8c8c8e;
    width: 100%;
    height: 1px;
    opacity: .33;
    margin: 10px 0;
`

const PersonalInfo = styled.div`
    background-color: #20202a;
    width: 21%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4em;
`

const PersonalInfoPersonal = styled.div`
    background: linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%);
    height: 23%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #8c8c8e;
`

const PersonalInfoSkills = styled.div`
    height: 68%;
    padding: 20px;

    div:nth-child(1) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div:nth-child(2) {
                color: #8c8c8e;
            }
        }
    }

    div:nth-child(3) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div:nth-child(2) {
                color: #8c8c8e;
            }
        }
    }

    div:nth-child(5) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                background-color: #8c8c8e;
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 1em;
                line-height: 1.5em
            }
        }
    }

    div:nth-child(7) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                background-color: #8c8c8e;
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 1em;
                line-height: 1.5em
            }
        }
    }

    div:nth-child(9) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                margin: 2.5px;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 0.9em;
                line-height: 1.2em;
                color: #8c8c8e;

                svg {
                    margin-right: 10px;
                    color: #ffc107;
                }
            }
        }
    }
`

const PersonalInfoSocial = styled.div`
    background: linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%);
    height: 5%;

    display: flex;
    justify-content: center;
    align-items: center;


    div {
        font-size: 1.5em;
        margin: 0 10px;
    }
`

const PublicInfo = styled.div`
    width: 79%;
`

const Timeline = styled.div`
    background: #20202a;
    padding: 2rem;
    border-radius: 15px;
    margin: 0 5px;
    box-shadow: 5px 7px 7px 0px #252532;
    width: 100%;

    h1 {
        color: lightgray;
    }
`

const TimelineItems = styled.ul`
    margin-top: 2rem;
    border-radius: 12px;
    position: relative;
    list-style-type: none;
`

const TimelineItem = styled.li`
    padding-bottom: 1.5rem;
    border-left: 1px solid #abaaed;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;

    &:last-child{
        border: 0px;
        padding-bottom: 0;
    }

    &:before{
        content: '';
        width: 15px;
        height: 15px;
        background: white;
        border: 1px solid #4e5ed3;
        box-shadow: 3px 3px 0px #bab5f8;
        box-shadow: 3px 3px 0px #bab5f8;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: 0px;
    }
`

const TimelineTitle = styled.div`
    color: #DCDCDC;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    /* @include mobile-and-up{
      font-size: .9rem;
    }
    @include mobile-only{
      margin-bottom: .3rem;
      font-size: 0.85rem;
    } */
`

const TimelineTitleContent = styled.div``

const TimelineTitleDate = styled.div`
    background-color: #8c8c8e;
    border-radius: 10px;
    min-width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 5px;
`

const TimelineItemContent = styled.p`
    color: #8c8c8e;
    font-family: sans-serif;
    font-size: 0.9em;
    line-height: 1.2;
    margin-top:0.4rem;
    text-align: justify;
    /* @include mobile-only{
    font-size: .9rem;
    } */
`

const TechnologiesTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
        background-color: #8c8c8e;
        margin: 2.5px;
        padding: 0 5px;
        border-radius: 5px;
        font-size: 1em;
        line-height: 1.5em;
        color: #DCDCDC;
    }
`