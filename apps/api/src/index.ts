import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const userCanDeleteOtherUser = ability.can('delete', 'User')

console.log(userCanDeleteOtherUser)
