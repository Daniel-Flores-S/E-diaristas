import PageTitle from 'ui/components/data-display/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import UserInformetion from   'ui/components/data-display/UserInformetion';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais."}
        subtitle={"Preencha seu Endereço é veja todos os proficionais da sua localidade"}
      />
      <UserInformetion
        picture={"https://github.com/Daniel-Flores-S.png"}
        name={"Daniel"}
        rating={3}
        description={"Bahia"}

      />
    </div>

  )
}
