<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>2º Semestre • 7/2022 - RH4Vox</h2>
      <h3>Repositório: <a href="https://github.com/equipe-vox/api-2sem" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://www.pro4tech.com.br/" target="_blank">Pro4Tech</a></h3>
      <img src="/src/assets/semester2/rh4vox.png" alt="boardclass" width="800" height="500">
    </section>


    <section class="section">
      <p>O RH4Vox é um sistema para gerenciamento de vagas de emprego e candidaturas de profissionais interessados. Permite também o controle de RH´s por seus gestores, por meio de relatórios gerados pelo sistema.</p>
      <p>Ele oferece uma plataforma centralizada para empresas controlarem suas oportunidades de emprego e processos de recrutamento, enquanto permite aos candidatos acessarem e se candidatarem a essas vagas de forma eficiente. Além disso, o sistema possibilita que os gestores de Recursos Humanos monitorem e controlem suas atividades por meio de relatórios detalhados gerados automaticamente pelo sistema.</p>
    </section>


    <section class="section">
      <h3><b>Tecnologias utilizadas:</b></h3>
      <br>
      <div>
        <img align="center" alt="Figma-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg">
        <b>Figma:</b> Design
      </div>
      <div>
        <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
        <b>Java:</b> Ecossistema
      </div>
      <div>
        <img align="center" alt="JavaFX-icon" height="35" width="50" src="../assets/semester2/JavaFX.png">
        <b>JavaFX:</b> Frontend
      </div>
      <div>
        <img align="center" alt="Postgres-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg">
        <b>PostgresSQL:</b> Banco de dados
      </div>   
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p>Como Product Owner minhas contribuições foram definir e priorizar os requisitos do produto, alinhando-os com as necessidades dos usuários e os objetivos do negócio. Trabalhei de perto com a equipe de desenvolvimento, fornecendo orientação e feedback contínuo para garantir que o produto atendesse aos padrões de qualidade e usabilidade esperados, e também no desevolvimento de algumas funcionalidades.</p>
      <details>
        <summary><b>Máscaras de entrada para campos de textos</b></summary>
        <p>A classe fornece uma maneira flexível de criar campos de texto com máscaras de entrada personalizadas, permitindo que os desenvolvedores definam regras específicas para o tipo de caracteres que são permitidos em cada posição do campo de texto.</p>
        <pre><code>

public class MaskedTextField extends TextField {

  private static final char MASK_ESCAPE = '\'';
  private static final char MASK_NUMBER = '#';
  private static final char MASK_CHARACTER = '?';
  private static final char MASK_HEXADECIMAL = 'H';
  private static final char MASK_UPPER_CHARACTER = 'U';
  private static final char MASK_LOWER_CHARACTER = 'L';
  private static final char MASK_CHAR_OR_NUM = 'A';
  private static final char MASK_ANYTHING = '*';

  private int maskLength;
  private char placeholder;
  private StringProperty mask;
  private StringProperty plainText;
  private StringBuilder plainTextBuilder;

  private List<span><</span>MaskCharacter> semanticMask;

  public MaskedTextField() {
      this("", '_');
  }

  public MaskedTextField(String mask) {
      this(mask, '_');
  }

  public MaskedTextField(String mask, char placeholder) {
      this.mask = new SimpleStringProperty(this, "mask", mask);
      this.placeholder = placeholder;
      this.plainText = new SimpleStringProperty(this, "plaintext", "");
      this.plainTextBuilder = new StringBuilder();
      this.semanticMask = new ArrayList<>();
      
      init();
  }

}
        </code></pre>
        <p>As constantes MASK_ESCAPE, MASK_NUMBER, MASK_CHARACTER, entre outras, são definidas para representar os diferentes tipos de caracteres na máscara de entrada.</p>
        <p>Em seguida, são definidos os atributos da classe, para armazenar o comprimento da máscara de entrada(maskLenght), propriedade de string que armazena a máscara de entrada(mask), string que armazena o texto sem formatação, entre outras. Também é definido o construtor da classe.</p>
        <p>Temos o método buildSemanticMask(), responsável por construir a máscara semântica com base na máscara de entrada. O método updateSemanticMask() atualiza a máscara semântica com base no novo texto sem formatação fornecido. O método resetSemanticMask() define todos os valores na máscara semântica como o marcador de espaço reservado (placeholder).</p>
        <pre><code>
private void buildSemanticMask() {
  char[] newMask = getMask().toCharArray();
  int i = 0;
  int length = newMask.length;
      
  semanticMask.clear();
      
  MaskFactory factory = new MaskFactory();

  while(i < length) {
    char maskValue = newMask[i];

    if (maskValue == MASK_ESCAPE) {
        semanticMask.add(factory.createMask(maskValue, newMask[i + 1]));
        i++;
    } else {
        char value = isLiteral(maskValue) ? maskValue : placeholder;
        semanticMask.add(factory.createMask(maskValue, value));
    }
        
    i++;
  }
        
  maskLength = semanticMask.size();
}

private void resetSemanticMask() {
    semanticMask.stream().forEach(maskCharacter-> maskCharacter.setValue(placeholder));
}

private void updateSemanticMask(String newText) {
    resetSemanticMask();
    stringToValue(newText);
    setText(valuesToString());
}
      </code></pre>
      <p>Esses 3 métodos garantem que o campo de texto seja corretamente formatado de acordo com a máscara de entrada e com o texto inserido pelo usuário.</p>
      </details>
      
      <br>
      <details>
        <summary><b>Validação de CPF</b></summary>
        <p>Também fui responsável por criar a classe de validação de CPF.</p>
        <pre><code>
package br.com.rh4vox.validator;

import br.com.rh4vox.exception.ValidationException;

public class CpfValidator{
  public static void validate(String cpf) throws ValidationException {
    String exceptionMessage = "CPF inválido";

    String cpfNumbers = cpf.replace(".", "").replace("-", "");
    int primeiroDigito = Character.getNumericValue(cpfNumbers.charAt(9));
    int segundoDigito = Character.getNumericValue(cpfNumbers.charAt(10));
    int somaPrimeiroDigito = 0, somaSegundoDigito = 0, sobra;

    Integer number = null;
    for(int i=0; i < 11; i++){
      if(number == null)
        number = Character.getNumericValue(cpfNumbers.charAt(i));

      if(number != Character.getNumericValue(cpfNumbers.charAt(i)))
        break;

      if(i == 10)
        throw new ValidationException(exceptionMessage);
    }
    for(int i=0; i < 9; i++){
      int numberAtPosition = Character.getNumericValue(cpfNumbers.charAt(i));
      somaPrimeiroDigito += numberAtPosition * (10-i);
    }

    sobra = 11 - (somaPrimeiroDigito % 11);
    if(sobra > 10 && primeiroDigito != 0 || sobra < 10 && sobra != primeiroDigito)
      throw new ValidationException(exceptionMessage);

    for(int i=0; i < 10; i++){
      int numberAtPosition = Character.getNumericValue(cpfNumbers.charAt(i));
      somaSegundoDigito += numberAtPosition * (11-i);
    }

    sobra = 11 - (somaSegundoDigito % 11);
    if(sobra > 10 && segundoDigito != 0 || sobra < 10 && sobra != segundoDigito)
      throw new ValidationException(exceptionMessage);
  }
}
        </code></pre>
        <p>Este método recebe um CPF como uma string, remove os pontos e o traço do CPF, deixando apenas os números. Após isso criamos uma verificação em que todos os dígitos do CPF são iguais. Se forem, lança uma exceção de validação. Em seguinda calculamos o primeiro dígito verificador do CPF utilizando o algoritmo de validação. Se o primeiro dígito não corresponder, lança uma exceção de validação. Se o segundo dígito calculado corresponde ao segundo dígito real do CPF. Se não corresponder, lança uma exceção de validação.</p>
      </details>
      <br>
      <details>
        <summary><b>Coleta de requisitos</b></summary>
        <p style="font-weight: normal;">Fui responsável por conduzir a comunicação entre a equipe de desenvolvimento e o cliente. Isso envolveu a organização de reuniões, e questionamentos sobre as dúvidas da equipe com o cliente. Mativemos um canal aberto de comunicação com o cliente, garantindo que suas necessidades fossem compreendidas. Após entender profundamente as necessidades do cliente, traduzimos as informações coletadas em requisitos claros e compreensíveis para a equipe de desenvolvimento, como histórias de usuários, especificações de requisitos ou outros artefatos de documentação.</p>
      </details>
      <br>
      <details>
        <summary><b>Backlog priorizado</b></summary>
        <p style="font-weight: normal;">Após a coleta dos requisitos, fui responsável por transformar esses requisitos em itens de backlog priorizado, trabalhando em estreita colaboração com a equipe de desenvolvimento para elaborar os itens de forma clara, detalhada e compreensível. Os itens são priorizados com base no valor para o cliente, riscos, dependências e outras considerações estratégicas. O objetivo é garantir que a equipe esteja sempre trabalhando nas atividades mais importantes e que agreguem valor ao produto.</p>
        <p>Abaixo temos o backlog priorizado desenvolvido para o produto.</p>
        <img align="center" alt="backlog" src="../assets/semester2/backlog.jpeg">
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul style="font-weight: normal;">
        <li><b>Java: </b> Desenvolvi habilidade com a linguagem JAVA, sendo capaz de desenvolver soluções robustas e escaláveis para problemas de negócio. Meu conhecimento inclui o desenvolvimento de componentes reutilizáveis, a implementação de algoritmos eficientes e a utilização de padrões de design como MVC e Factory.</li><br>
        <li><b>Desenvolvimento de Componentes Customizados: </b>Tenho experiência na criação de componentes personalizados para atender às necessidades específicas do projeto. Isso incluiu a construção do MaskedTextField, um componente que permite a entrada formatada de dados em campos de texto, e do CpfValidator, uma classe responsável por validar números de CPF de acordo com o algoritmo padrão.</li><br>
        <li><b>Integração de API REST: </b>Adquiri habilidades avançadas na integração de sistemas por meio de APIs RESTful. Durante o projeto, aprendi a consumir e manipular dados de APIs externas de forma eficiente e segura, garantindo a interoperabilidade entre diferentes sistemas.</li><br>
      </ul>
    </section>

    <section class="section">
      <h3>Soft Skills</h3>
      <ul style="font-weight: normal;">
        <li><b>Coleta de Requisitos: </b>  Participei ativamente, contribuindo para a coleta de requisitos, entendo as expectativas do cliente e questionando os principais pontos destacados por ele.</li><br>
        <li><b>Backlog priorizado: </b> Construção e priorização do backlog, e feedback contínuo com a equipe de desenvolvimento e cliente. Isso ajudou a garantir que o produto fosse entregue de forma iterativa e incremental, atendendo às necessidades do cliente de maneira eficaz e dentro do prazo de entrega.</li><br>
      </ul>
    </section>
    <br><br>
  </div>
</template>