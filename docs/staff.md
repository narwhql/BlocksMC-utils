# Fetching Staff Data

Fetching staff data is simple and will provide you with the following:
- Owner
- Admins
- Moderators
- Team members

## Fetch URL
?> [https://blocksmc.com/players](https://blocksmc.com/players)

#### Example
```javascript
const staff = BlocksMC.staff;

console.log(await staff.fetchOwner()); // server owner
console.log(await staff.fetchAdmins()); // server admins
console.log(await staff.fetchModerators()); // server moderators
console.log(await staff.fetchTeam()); // server team
```

?> [StaffMember](typescript/types/staff.md?id=staffmember)