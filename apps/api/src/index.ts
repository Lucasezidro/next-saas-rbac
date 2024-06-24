import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanDeleteOtherUser = ability.can('delete', 'User')

console.log(userCanDeleteOtherUser)
