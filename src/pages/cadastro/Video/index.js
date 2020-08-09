import React from "react";
import PageDafault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
function CadastroVideo() {
  return (
    <PageDafault>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDafault>
  );
}
export default CadastroVideo;
