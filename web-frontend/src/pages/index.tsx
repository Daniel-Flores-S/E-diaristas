import PageTitle from 'ui/components/data-display/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={"Conheça nossos profissionais."}
        subtitle={"Preencha seu Endereço é veja todos os proficionais da sua localidade"}
      />
    </div>
    
  )
}
