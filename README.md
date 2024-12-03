# OrdersDashboard

Angular 18 app with primeng for UI/UX, primeflex for responsiveness. 
Only async pipes are in use, no distructors required.

4) a. The store structure includes: users: {[id:number]: User}, selectedUserId: number | null,  {[id:number]: Order}
Orders are always refetched per a selected user if chenges, only specific orders by user id present in the store for further selections.
The idea is to keep only required data (Users) in the store and fetch the changing data.
For larger lists a pagination would be implemented if suits the overall product requirements.

5) There's a main Dashboard component that contains all users display and all selected user orders in addition to required: UserOrdersComponent, UserNameComponent, TotalAmountComponent

6) Currently using switchMap to promote request cancellation 

