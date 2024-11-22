<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>4º Semestre • 7/2023 - Software de Inspeção Predial</h2>
      <h3>Repositório: <a href="https://github.com/Data-Team23/Jaia" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://www.jaia.software/" target="_blank">Jaia Software</a></h3>
      <img src="/src/assets/semester4/jaia_logo.png" alt="jaia" width="800">
    </section>


    <section class="section">
      <p>Em um cenário onde a paisagem urbana se compõe de uma mistura de edifícios modernos e históricos, a empresa Jaia, apresentou um desafio significativo. A condução de inspeções prediais estava provando ser uma tarefa morosa e suscetível a imprecisões.</p>
      <p>Diante desse cenário, a Jaia buscou soluções inovadoras para otimizar esse processo crucial. A visão estratégica da empresa contemplou o desenvolvimento de um software de inspeção predial, projetado para revolucionar a abordagem atual. A plataforma concebida promete oferecer uma experiência intuitiva, capacitando os inspetores a documentar minuciosamente detalhes relevantes e capturar evidências visuais de forma eficaz. Adicionalmente, a geração instantânea de relatórios abastecerá a tomada de decisões embasadas. A Jaia, reconhecendo a necessidade de aprimorar a qualidade e eficiência das inspeções, direcionou seus esforços para o desenvolvimento desse software inovador. O resultado obtido transcendeu as expectativas iniciais, beneficiando não somente a empresa, mas também elevando o padrão das inspeções prediais na esfera urbana, contribuindo, assim, para uma maior segurança e excelência nas estruturas urbanas.</p>
    </section>


    <section class="section">
      <h3><b>Tecnologias utilizadas:</b></h3>
      <br>
      <div>
        <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
        <b>Java:</b> Ecossistema
      </div>
      <div>
        <img align="center" alt="JavaFX-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg">
        <b>SpringBoot:</b> Backend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg">
        <b>VueJS:</b> Frontend
      </div>
      <div>
        <img align="center" alt="Postgres-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg">
        <b>OracleSQL:</b> Banco de dados
      </div>
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p>Como parte da equipe de desenvolvimento, fiquei responsável por desenvolver funcionalidades na linguagem java para tratamento de requisições e dados para o dashboard, também fui responsável pelo desenvolvimento de interfaces de usuário, como os formulários, listas e dashboards.</p>
      <details>
        <summary><b>Criação de Repositories e definição de querys JPQL</b></summary>
        <p>Para a entidade Checklist usamos a interface JpaRepository para definir um repositório para ela.</p>
        <pre><code>
@Repository
public interface ChecklistRepository extends JpaRepository <span><</span>Checklist, Long>{   
  @Modifying
  @Transactional
  @Query("DELETE FROM Checklist c WHERE c.id = ?1")
  void deleteByIdWithCascade(Long id);
}
        </code></pre>
        <p>O ChecklistRepository estende JpaRepository, que fornece um conjunto completo de métodos padrão para manipulação de dados. A anotação @Repository declara a interface como um componente de repositório Spring, que será automaticamente detectada e configurada.
        O método deleteByIdWithCascade faz uma deleção personalizada de um Checklist pelo seu ID, lidando com a exclusão em cascata de relações associadas.</p> 
        <p>A anotação @Modifying indica que o método executará uma operação de modificação no banco de dados. Com o @Transactional garantimos que a operação de modificação seja executada dentro de uma transação.
        O @Query define a consulta JPQL (Java Persistence Query Language) para deletar um Checklist específico pelo seu ID. A consulta "DELETE FROM Checklist c WHERE c.id = ?1" remove o Checklist cujo id corresponde ao parâmetro fornecido.</p>
      </details>
      <br>
      <details>
        <summary><b>Criação de Services para o Checklist</b></summary>
        <p>Criamos um serviço utilizando o SpringBoot para tratamento dos dados de checklist, que é responsável por definir os itens que devem ser checados em um vistoria.</p>
        <pre><code>
@Service
public class ChecklistService {

  @Autowired
  private ChecklistRepository checkListRepo;

  @Autowired
  private DepartamentoRepository departamentoRepo;

  public Checklist novoChecklist(Checklist checklist, Long departamentoId) {
      Optional<span><</span>Departamento> optDepartamento = departamentoRepo.findById(departamentoId);
      if (optDepartamento.isPresent()) {
          Departamento departamento = optDepartamento.get();
          checklist.setDepartamento(departamento);
          departamento.getChecklists().add(checklist);
          departamentoRepo.save(departamento);
          checklist = checkListRepo.save(checklist);
      }
      return checklist;
  }

  public List<span><</span>Checklist> buscarTodos() {
      return checkListRepo.findAll();
  }

  public Checklist buscarPorId(Long id) {
      Optional<span><</span>Checklist> optChecklist = checkListRepo.findById(id);
      if (optChecklist.isEmpty()) {
          throw new IllegalArgumentException("Checklist não encontrado!!");
      }
      Checklist checklist = optChecklist.get();
      return checklist;
  }

  public void deletarPorId(Long id) {
      checkListRepo.deleteByIdWithCascade(id);
  }

}
        </code></pre>
        <p>Utilizamos a anotação @Service para definir a classe como um componente de serviço no spring. O @Autowired injeta as dependências automaticamente para as classes de Repository que vamos utilizar.</p>
        <p>A função novoChecklist() cria e associa um checklist a um departamento que será buscao pelo departamentoId fornecido como parâmetro da função.</p>
        <p>A função buscarTodos() utiliza o Repository para obter todos os checklists exitentes no banco de dados.
        A função buscarPorId() busca e retorna um checklist específico através do id passado como parâmetro, se o id fornecido não for encontrado, lança um exceção.</p>
        <p>A função deletar por id remove um checklist do banco de dados através do id passado como parâmetro, incluindo suas dependências. Esta função utiliza um método customizado do repositório (deleteByIdWithCascade) para garantir que a exclusão seja realizada de forma adequada, lidando com todas as relações associadas ao checklist.</p>
      </details>
      <br>
      <details>
        <summary><b>Criação do DTO (Data Transfer Object) para o dashboard.</b></summary>
        <p>A classe DashboardDTO é uma estrutura de dados simples que encapsula as informações necessárias para a representação de um gráfico no dashboard.</p>
        <pre><code>
package com.dataTeam.jaia.jaia.DTO;

import java.util.List;

import lombok.Data;

@Data
public class DashboardDTO {
  private List<span><</span>String> labels;
  private List<span><</span>DatasetsDTO> datasets;
}
        </code></pre>
        <p>A classe DashboardDTO é essencialmente um "container" que agrega os dados necessários para criar um gráfico no dashboard. Ela organiza os rótulos e os conjuntos de dados de forma estruturada, facilitando a transmissão desses dados para componentes de visualização, como gráficos em uma interface de usuário. A anotação @Data gera automaticamente os métodos padrões (getters, setters, toString, etc.) para os campos da classe.</p>
      </details>
      <br>
      <details>
        <summary><b>Desenvolvimento das funcionalidade para o tratamento dos dados do dashboard</b></summary>
        <p>Utilizando a classe DashboardDTO que contém as etiquetas (labels) e os conjuntos de dados (datasets) necessários para a visualização gráfica, desenvolvemos funções para pegar esses dados que serão usados nos dashboards.</p>
        <pre><code>
public DashboardDTO getOsByStatus() {
  DashboardDTO dataDashboard = new DashboardDTO();
  DatasetsDTO datasets = new DatasetsDTO();
  List datasetsList = new ArrayList<>();
  List ordens = ordemService.buscarTodasOrdemServico();
  List labels = new ArrayList<>();
  List osCountList = new ArrayList<>();
  String[] barColors = { "#000000", "#2E2E48", "#626288", "#8080BF", "#6A6A69" };

  Map<span><</span>String, Integer> osCountMap = new HashMap<>();

  for (OrdemServico ordem : ordens) {
      String osStatus = ordem.getStatus_ordem();
      osCountMap.put(osStatus, osCountMap.getOrDefault(osStatus, 0) + 1);
  }

  for (Map.Entry<span><</span>String, Integer> entry : osCountMap.entrySet()) {
      labels.add(entry.getKey());
      osCountList.add(entry.getValue());
  }

  datasets.setData(osCountList);
  // datasets.setLabel("Status da ordem");
  datasets.setBorderWidth(1);
  datasets.setBackgroundColor(barColors);
  datasetsList.add(0, datasets);
  dataDashboard.setLabels(labels);
  dataDashboard.setDatasets(datasetsList);

  return dataDashboard;
}          
        </code></pre>
      </details>
    </section>

    <br><br>

    <section class="section">
      <h3><b>Tecnologias Aplicadas:</b></h3>
      <p>Essas foram as tecnologias que eu utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>Java e SpringBoot</b></summary>
          <p> Implementação do backend, incluindo a criação de endpoints RESTful e serviços para a manipulação de dados. Utilizei o Spring Data JPA para definir repositories e consultas personalizadas com JPQL.</p>  
      </details>
      <br>
      <details>
          <summary><b>JPQL</b></summary>
          <p>Utilização para a criação de consultas orientadas a objetos, como a exclusão em cascata de registros relacionados à entidade Checklist. Isso permitiu manipular dados com precisão e flexibilidade.</p>   
      </details>
      <br>
      <details>
          <summary><b>Lombok</b></summary>
          <p>Criação de DTOs, reduzindo a necessidade de métodos manuais como getters, setters e construtores. Esse recurso foi utilizado para estruturar dados destinados à visualização no dashboard.</p>   
      </details>
      <br>
      <details>
          <summary><b>Vue.js</b></summary>
          <p>Desenvolvimento das interfaces de usuário. O uso do Vue possibilitou a criação de telas modernas, responsivas e interativas, onde inspetores puderam gerenciar dados de inspeções e visualizar métricas em tempo real.</p>   
      </details>
      <br>
      <details>
          <summary><b>Chart.js</b></summary>
          <p>Integração no frontend para exibir gráficos dinâmicos com base nos dados do DashboardDTO. Essa biblioteca possibilitou a visualização clara das métricas de inspeções.</p>   
      </details>
    </section>

    <br><br>
     
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Desenvolvimento Backend com Java e SpringBoot: </b>Domínio do framework Spring Boot para implementar o CRUD da entidade Checklist, incluindo a criação de services e repositories com consultas personalizadas usando JPQL. Um exemplo significativo foi o método deleteByIdWithCascade, que garantiu exclusão em cascata com integridade relacional.</li><br>
        <li><b>Manipulação de Dados e Visualização: </b> Desenvolvimento de funcionalidades para geração de dados estruturados usando o DTO DashboardDTO. Essa implementação possibilitou a construção de gráficos no dashboard, proporcionando insights claros e visuais para a tomada de decisões.</li><br>
        <li><b>Uso do JPQL para Consultas Personalizadas: </b>Utilizei o JPQL para criar consultas orientadas a objetos e manipular objetos persistentes no contexto do Spring Boot, permitindo operações complexas e flexíveis aos dados armazenados no banco de dados.</li><br>
        <li><b>Desenvolvimento Frontend com Vue.js: </b>Desenvolvi interfaces de usuário modernas e responsivas utilizando Vue. Isso incluiu a construção da interface de checklist, onde os inspetores poderiam adicionar, editar e visualizar detalhes relevantes das inspeções, e a interface de dashboard, que proporcionava uma visão clara e visual dos dados de inspeção.</li><br>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Colaboração Multidisciplinar: </b>Trabalhei em conjunto com colegas com diferentes funções dentro do projeto, conectando as funcionalidades do backend com as interfaces do frontend para criar uma solução integrada e funcional.</li><br>
        <li><b>Resolução de problemas: </b>Aprimorei habilidades em identificar, analisar e resolver problemas de forma criativa e eficaz, buscando soluções inovadoras para desafios técnicos e organizacionais encontrados durante o desenvolvimento do software de inspeção predial.</li><br>
        <li><b>Proatividade: </b>Antecipei necessidades do projeto, como a inclusão de exclusões em cascata e a modelagem dos gráficos no dashboard, propondo e implementando melhorias antes que se tornassem gargalos no desenvolvimento.</li><br>
      </ul>
    </section>
    <br><br>
  </div>
</template>