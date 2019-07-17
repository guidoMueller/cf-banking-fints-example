import moment from "moment"

export function getAccountStatements( client, accounts, statements, callback ) {
  for ( let i in accounts ) {
    let account = accounts[i]

    if ( !account.hasOwnProperty( "statementsIsSet" ) || (account.hasOwnProperty( "statementsIsSet" ) && !account.statementsIsSet) ) {
      client
        .statements( account, new Date( moment().subtract( 1, 'day' ).startOf( 'day' ) ), new Date() )
/**.statements( account, new Date("2019-07-08"), new Date("2019-07-08") )*/
        .then( function( statementsBack ) {
          statements.push( statementsBack )
          account.statementsIsSet = true
          account.statements = ((statementsBack.length > 0) ? statementsBack[0] : {})
          let accountsFilter = accounts.filter( function( account ) {
            return (account.hasOwnProperty( "statementsIsSet" ))
          } )
          if ( accountsFilter.length === accounts.length ) {
            callback( statements, accounts )
            return
          } else {
            getAccountStatements( client, accounts, statements, callback )
          }
        } );
      break
    }
  }
}