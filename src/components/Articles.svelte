<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {push} from 'svelte-spa-router'
  import {faUtensils } from '@fortawesome/free-solid-svg-icons'
  import {faNewspaper} from '@fortawesome/free-regular-svg-icons'
  import Button from 'smelte/src/components/Button'
  import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'


  function closeHandler() {
    push('/')
  }
</script>

<SimpleHeader title="Artiklar" icon={faNewspaper} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>

<div class="bg-alert-300">
  <div class="text-header3">
    Vad är Microgreens?
  </div>

  Microgreens är en paraply term för en mängd grönsaker som skördas
  på ett mycket tidigt stadium. Medan de har varit tillgängliga under
  ganska lång tid i hälsokostaffärer och några specialmarknader har
  mikrogreens nyligen blivit mer tillgängliga på den bredda marknaden.
  Deras ökande popularitet beror delvis på deras förmåga att packa mycket
  smak i en liten mängd, liksom deras flexibilitet att vara med i en maträtt.

  Mikroblad, ibland även kallat för microgreens, används till garnering,
  i sallader, smoothies, shots, soppor och tillbehör. De har snabbt blivit
  den nya gröna gourmetmaten vid sidan av klassiska tillbehör. I själva verket
  är begreppet ”microgreen” och växande gröna trender på detta sätt ett ganska
  nytt begrepp som först uppstod i slutet av 90-talet (på sina håll i USA redan på 80-talet).

  Microgreens är en av de mest lönsamma grödorna du kan odla, på grund av deras
  höga värde och snabbt växande tider. Att växa och sälja microgreens är ett av de
  bästa sätten att starta din urbana gård. De är perfekta som en fristående verksamhet eller tillägg till någon liten gård.


</div>
