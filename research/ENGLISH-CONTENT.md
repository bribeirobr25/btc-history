# Bitcoin — The Human Story

Generated from app/timeline-data.json. Do not edit this export.

Reviewed: 2026-11-09

Historical reporting cutoff: 2026-11-08

# Historical stories (117)

## 2008-08-18 — An idea gets an address.

ID: bitcoin-domain · Documented

The bitcoin.org domain was registered before the whitepaper appeared. A shared web address gave an emerging project a place to publish software and explanations.

### Why it matters

Open networks still need ordinary infrastructure: websites, maintainers and ways for newcomers to find reliable information. A domain can help people discover a project without controlling its consensus rules.

### What the evidence does not prove

A registration date is not proof of a working network, nor does control of a website confer ownership of Bitcoin.

- [Bitcoin.org · domain history](https://bitcoin.org/en/posts/ten-year-anniversary)

## 2008-10-31 — A proposal, not a promise.

ID: a-proposal-not-a-promise · Documented

Satoshi Nakamoto shared a paper describing payments without a central payment operator. Its contribution was a way for participants to agree on a transaction history. The paper proposed a system; it could not establish how society would later use it.

### What this changed

A bank normally keeps the account ledger and decides whether a payment can go through. This proposal asked computers to check a shared history instead. It combined cryptographic signatures with proof of work, so changing the accepted history would require substantial computing work.

### How it works

The double-spending problem is about agreeing which spend came first. The proposed chain lets nodes compare competing histories by accumulated proof of work, under explicit assumptions about honest computing power.

### What the evidence does not prove

Removing a central bookkeeper did not remove trust from daily life. People would still rely on software, compatible rules and secure keys. The paper is evidence of a proposal, not proof of its later social benefits.

- [Satoshi — mailing-list announcement, 31 Oct 2008](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html)
- [Satoshi Nakamoto — original paper](https://bitcoin.org/bitcoin.pdf)

## 2009-01-03 — The shared record begins.

ID: the-shared-record-begins · Documented

The genesis block marked the beginning of Bitcoin’s record. A proposal was becoming software that people could run. Its early history is an opportunity to explain what a block records, who checks it, and why agreement still depends on people using compatible rules.

### What this changed

A block groups transactions into a record linked to an earlier block. The first block has no predecessor. Later participants could start from this shared beginning and check the history themselves.

### How it works

Later blocks commit to earlier ones. The genesis coinbase output is exceptional: the original implementation does not make its 50 BTC spendable. A recorded subsidy is therefore not always equivalent to spendable coins.

### A closer historical detail

The first block includes a Times headline about a second bank bailout. The recorded text connects the artifact to its historical moment; it does not establish all of Satoshi’s motives. The block timestamp is a field in the record, not an independently measured wall-clock observation.

### What the evidence does not prove

Nodes check whether blocks follow the rules. Miners compete to propose blocks using proof of work. Those roles are different: computing power does not make an invalid payment acceptable to a node that rejects it.

- [Blockstream — Genesis block](https://help.blockstream.com/education/glossary/genesis-block)
- [Block 0 · inspect the on-chain record](https://mempool.space/block/0)
- [Bitcoin Core · genesis block construction](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp)

## 8 January 2009 — An ordinary computer could join.

ID: cpu · Documented

The first release announcement invites people to run experimental software, connect to peers and generate coins on a typical PC. Network participation and mining initially live in the same small software distribution. The author warns that the software is alpha and experimental.

### How it works

A CPU can perform the required hashes, but a successful block must still meet the network target. Difficulty adjusts as competition changes; the announcement’s claim describes the early network, not present-day mining.

### What the evidence does not prove

The early announcement described a small experimental network. It was not a lasting promise that a normal computer would remain competitive. Specialised equipment later changed the practical costs of participating as a miner.

- [Original Bitcoin v0.1 release email](https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html)

## 12 January 2009 — A payment between two people.

ID: a-payment-between-two-people · Documented

Hal Finney later recalled receiving ten bitcoin from Satoshi as a test. This was an early demonstration of a transfer between participants, not a purchase or evidence of a functioning mass market. Testing and bug reports were part of the network’s beginning.

### What this changed

For a payment to matter, someone other than its creator must be able to receive and check it. Finney's recollection makes that early experiment personal: a second participant ran the software and helped test it.

### How it works

A payment spends earlier outputs and creates new ones. The record is not an account balance moving between named bank accounts; names are historical attribution supplied by testimony, not fields in the blockchain.

### What the evidence does not prove

Block 170 records the transfer on 12 January 2009. Finney’s later recollection supplies the personal attribution: names are not recorded in the transaction. A successful test was not evidence of a mass market.

- [Hal Finney — Bitcoin and me, 2013 recollection](https://bitcointalk.org/index.php?topic=155054.0)
- [Block 170 · transaction record](https://mempool.space/block/170)

## December 2009 · surviving quotation record — Someone has to name a price.

ID: new-liberty-standard · Documented

New Liberty Standard published early exchange quotations and described a method based on electricity costs and coins generated. Pricing was a human arrangement before there was a deep market.

### Why it matters

A quotation creates a possible meeting point for a buyer and seller. It does not create liquidity: someone still has to agree to trade at that rate.

### What the evidence does not prove

Surviving records do not justify treating one quotation as a universal market price. This entry deliberately uses a month rather than claiming an unverified first-trade day.

### About this date

The surviving exchange page lists quotations for December 2009. This entry uses that dated record; it does not claim that December was the service’s launch month.

- [New Liberty Standard · surviving exchange page](https://newlibertystandard.io/exchange)

## 17 March 2010 — A market needs a counterparty.

ID: bitcoin-market · Documented

Bitcoin Market brings buyers and sellers together in a dedicated trading venue. A network that records payments does not itself set a dollar price. People need a separate place or arrangement to agree on an exchange rate.

### How it works

Lists of offers to buy and sell help participants discover a price. But paying with ordinary money, storing customers’ funds and resolving disputes remain tasks for people and businesses. Those responsibilities are not automatically handled by Bitcoin’s transaction rules.

### What the evidence does not prove

March identifies documented operation, not the January proposal. Earlier informal exchange services existed; this is not a claim that Bitcoin previously had no economic value.

### About this date

On 17 March, operator dwdollar reported the first trade on Bitcoin Market in the original forum thread. This is a first trade on that service, not the first exchange of bitcoin anywhere.

- [Original Bitcoin Market thread](https://bitcointalk.org/index.php?topic=20.0)
- [Operational date and context](https://www.guinnessworldrecords.com/world-records/696258-first-cryptocurrency-exchange)
- [Bitcoin Market: operator’s first-trade report](https://bitcointalk.org/index.php?topic=20.40)

## 2010-05-22 — Two pizzas, one agreement.

ID: two-pizzas-one-agreement · Documented

Laszlo Hanyecz reported exchanging 10,000 bitcoin for two pizzas arranged by another forum participant. The important step was social: two people agreed to exchange something digital for something useful. The restaurant itself did not need to accept bitcoin.

### What this changed

The memorable part is the agreement, not a calculation of what those coins might be worth today. Someone wanted food; someone else was willing to arrange it in exchange for a new kind of digital asset.

### How it works

Bitcoin supplies payment settlement, not delivery or consumer protection. The arrangement still depends on people coordinating the order and trusting that the promised goods will arrive.

### A closer historical detail

Laszlo Hanyecz posted his offer on 18 May and reported the completed arrangement on 22 May 2010. Another participant arranged the pizzas. This does not mean the pizza company accepted bitcoin, and it was not the first transfer on the Bitcoin network.

### What the evidence does not prove

The forum thread is a participant's record of the exchange. It does not show that the pizza restaurant accepted bitcoin directly. Everyday acceptance would require many more people to find the arrangement convenient and repeat it.

- [Laszlo Hanyecz — original pizza thread](https://bitcointalk.org/index.php?topic=137.0)

## 2010-08-15 — The rules needed a repair.

ID: the-rules-needed-a-repair · Documented

An arithmetic bug allowed an invalid transaction with an enormous output total to enter the early chain. Developers released a fix and participants coordinated an upgrade. The episode shows why a monetary rule also depends on software implementing it correctly.

### What this changed

Software must turn a rule such as limited issuance into checks that actually work. An arithmetic error can defeat that intention. Repairing this incident required people to distribute a fix and adopt it.

### How it works

Implementation errors can violate intended monetary rules. Recovery depends on software changes and people agreeing which history to extend.

### What the evidence does not prove

This was a problem in early transaction validation, not a theft from an exchange account. Keeping those categories separate helps readers understand which safeguards failed and who was in a position to respond.

- [Original 2010 overflow incident discussion](https://bitcointalk.org/index.php?topic=823.0)
- [Original overflow discussion](https://bitcointalk.org/index.php?topic=822.0)

## 18 September 2010 — Graphics processors join the work.

ID: cuda · Documented

puddinpop announces the release of CUDA-client code after a contribution from jgarzik. The thread documents an open-source route into GPU mining, with discussions about licensing, performance and access to the implementation.

### How it works

GPUs can run many similar computations in parallel. Bitcoin hashing fits that style of work, allowing graphics hardware to compete with general-purpose CPUs. This story does not claim this post was the first private use of a GPU.

### What the evidence does not prove

The transition was both technical and economic. Faster hardware changed who could compete, while open code spread access to the method. Public release dates are easier to document than private experiments.

- [Original CUDA source-release post](https://bitcointalk.org/index.php?topic=133.msg12921)

Image: /assets/historical/gpu.jpg · Gastev / Mirko Tobias Schaefer · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [Record](https://commons.wikimedia.org/wiki/File:AustrianBitCoinMiningRig.jpg)
Scene described as Austria, October 2012; camera metadata gives 22 October. Commons version includes an earlier contributor’s white-balance, noise and contrast adjustments. No additional edits here; scaled to fit.

## 1 November 2010 — An open symbol travels.

ID: logo · Documented

A forum contributor publishes a new Bitcoin graphic: a tilted B inside an orange circle. A recognizable visual identity develops through community reuse rather than a central brand authority.

### How it works

A shared symbol helps a technical project move across websites, software and physical objects.

### What the evidence does not prove

The mark is one influential design, not the beginning of all Bitcoin imagery or evidence that one designer owns the network.

- [Original graphics thread](https://bitcointalk.org/index.php?topic=1631.0)

## 27 November 2010 — Mining becomes teamwork.

ID: mining-becomes-teamwork · Documented

Early mining-pool discussions explored sharing computing work and rewards. Cooperation could make payouts less unpredictable for small miners. It also introduced pool operators as important coordinators, opening a lasting question about where influence sits in a supposedly decentralised network.

### What this changed

Mining alone can mean long waits between rewards. A pool combines work and distributes proceeds according to its arrangements, reducing the unpredictability for participating miners.

### How it works

A pool measures contributed work using easier partial proofs, often called shares. Finding shares is not the same as finding network-valid blocks; it is a way to account for participation.

### What the evidence does not prove

Pooling also creates a coordination point. The operator's role, individual miners' equipment and the ability to change pools are different kinds of influence. A count of pools is not a count of independent machine owners.

### About this date

This date marks the original pooled-mining discussion. Development and operation continued through December; the date does not compress that process into one day.

- [Cooperative mining discussion, Nov–Dec 2010](https://bitcointalk.org/index.php?topic=1976.20)
- [Slush pool · original forum thread](https://bitcointalk.org/index.php?topic=1976)

## Around January 2011 — An open network meets an illegal market.

ID: an-open-network-meets-an-illegal-market · Documented

Silk Road began operating in 2011 and used bitcoin for transactions. The case made unlawful use an unavoidable part of Bitcoin’s public story. It also creates a question that applies beyond this marketplace: what can an open network prevent, and what must institutions investigate?

### What this changed

An open payment network does not ask each sender to prove that a purchase is lawful. That can widen access, but it also means the network itself does not serve as a marketplace police force.

### How it works

Public-ledger payments and pseudonymous accounts are not the same as untraceable transactions. Investigations connect digital records to people and services.

### What the evidence does not prove

Silk Road made this tension highly visible. Its use of bitcoin cannot establish what all other users were doing. The later shutdown and tracing cases show why payment records and ordinary investigations belong in the same story.

### About this date

The indictment places the creation of Silk Road approximately in January 2011. The month-end sorting key is only a display convention, not a claimed opening day.

- [US DOJ — Silk Road indictment and operating period](https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-indictment-ross-ulbricht-creator-and-owner-silk-road)
- [US DOJ — Silk Road case review](https://www.justice.gov/usao/page/file/1106771/dl)
- [Justice Department case account](https://www.justice.gov/usao-sdny/pr/ross-ulbricht-aka-dread-pirate-roberts-sentenced-manhattan-federal-court-life-prison)

## February 2011 — One dollar becomes a headline.

ID: dollar-parity · Attributed evidence · limits stated

A brief exchange parity with the US dollar becomes news in the early technical community. The discussion captures enthusiasm, skepticism and arguments about whether a nominal price says anything about monetary usefulness.

### How it works

Markets give Bitcoin an increasingly public reference price, while liquidity remains limited.

### What the evidence does not prove

A Bitcoin forum thread celebrates parity on 9 February; Slashdot discusses it on 10 February. These reports support February dating but do not independently establish the first executed trade at exactly one US dollar. Parity was a nominal market milestone, not economic equivalence to the dollar.

- [Slashdot contemporary coverage](https://slashdot.org/story/147526)
- [Contemporary Bitcoin forum: dollar parity](https://bitcointalk.org/index.php?topic=2734.0)
- [Slashdot: dollar parity, 10 February 2011](https://slashdot.org/story/11/02/10/189246/online-only-currency-bitcoin-reaches-dollar-parity)

## 23 April 2011 — The creator steps back.

ID: satoshi-stepback · Documented

Asked about returning to the community, Satoshi tells Mike Hearn that other interests now occupy their time and that the project is in good hands with Gavin and everyone. Maintenance continues without its creator’s regular public participation.

### How it works

A project can outlive a founder because software, discussion and validation do not require that person’s permission.

### What it meant for people

For contributors, the work could no longer depend on waiting for the creator to settle every question. The source email is a useful human moment in a longer handover of work. It does not mean one successor became the owner of Bitcoin: maintaining software and controlling the network are different roles.

### What the evidence does not prove

This is documented withdrawal, not a transfer of ownership of Bitcoin. The December 2010 forum post was technical, not a retirement announcement; this email is not claimed as the last communication to anyone.

- [Correspondence published by its recipient](https://plan99.net/~mike/satoshi-emails/thread5.html)
- [December technical forum post](https://bitcointalk.org/index.php?topic=2228)

## 20 May 2011 — Reconfigure the silicon.

ID: fpga · Documented

Developers announce mining software for programmable chips called FPGAs. These devices could be configured for specialised calculations, occupying a middle ground between graphics cards and chips permanently designed for mining. The public thread records an engineering community adapting different boards.

### How it works

A configurable chip still needs a circuit board, power and cooling. Engineers balance speed, electricity use and the amount of circuitry available. The historical photograph below shows those physical requirements; it cannot establish performance or operating costs by itself.

### What the evidence does not prove

The thread’s signed release note says May 19 while the forum post is dated May 20. This story uses the forum announcement date. Later edits and benchmark numbers should not be mistaken for launch specifications.

- [FPGA miner · original announcement and updates](https://bitcointalk.org/index.php?topic=9047.0)

Image: /assets/historical/icarus.jpg · Xiangfu · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Record](https://commons.wikimedia.org/wiki/File:Icarus_Bitcoin_Mining_rig.jpg)
Photograph dated 24 March 2012. Uncropped; scaled to fit. Not a photograph of the 2011 open-source release.

## 14 June 2011 — Donations find another route.

ID: wikileaks · Documented

After major payment firms restrict donations, WikiLeaks begins accepting Bitcoin. The episode makes financial access, political pressure and payment censorship concrete questions for the young network.

### How it works

A Bitcoin address can receive transfers without an account at the payment companies imposing the blockade. Turning funds into local money can still require intermediaries.

### What the evidence does not prove

The original WikiLeaks announcement dates this acceptance notice to 14 June. Bitcoin donations are not inherently anonymous, and the announcement does not establish immunity from law or every form of censorship.

- [Reporting on WikiLeaks and Bitcoin](https://www.forbes.com/sites/rogerhuang/2019/04/26/how-bitcoin-and-wikileaks-saved-each-other/)
- [WikiLeaks original donation announcement](https://x.com/wikileaks/status/80774521350668288)

## 2011-09-19 — A proposal gets a public record.

ID: bip-process · Documented

BIP 1 described a process for documenting Bitcoin improvement proposals. Its current record gives an assignment date of 19 September 2011.

### Why it matters

Written proposals let people inspect a design, discuss objections and follow revisions. This helps an open project coordinate without giving a single editor the power to change everyone’s rules.

### What the evidence does not prove

A BIP number is not approval. Publication, implementation and adoption are distinct steps. The process itself has also been revised; BIP 1 was superseded.

- [BIP 1 · process record](https://bips.dev/1/)

## 5 November 2011 — A wallet without the whole chain.

ID: electrum · Documented

Thomas Voegtlin announces Electrum, an alternative Bitcoin client. Lightweight wallets make participation more accessible while changing how users obtain and verify information about transactions.

### How it works

Keys can remain on the user’s device while remote servers supply blockchain information. Convenience brings privacy and verification trade-offs.

### What the evidence does not prove

The original thread was edited in 2012 and 2013. Its later feature list must not be presented as a complete specification of the November 2011 release.

- [Original Electrum announcement thread](https://bitcointalk.org/index.php?topic=50936.0)

## 11 February 2012 — A tree of keys from one seed.

ID: bip32 · Documented

BIP 32 describes how a wallet can derive a whole family of keys from one starting secret, called a seed. Instead of separately backing up every new key, a compatible wallet can recreate the family from that starting point.

### How it works

Some information can be shared to watch incoming payments or generate receiving addresses without giving permission to spend. Sharing it can still reveal connections between transactions. A backup that controls spending and a tool that only watches a wallet are different things.

### What the evidence does not prove

This date identifies the proposal’s assignment, not universal wallet adoption. A leaked seed remains dangerous, and an extended public key can expose sensitive transaction relationships.

- [BIP 32 specification](https://bips.dev/32/)

## 1 April 2012 — An address can commit to a script.

ID: p2sh · Documented

Pay to Script Hash makes it easier to pay someone whose wallet has special spending conditions. The sender can use a short address instead of handling the full set of conditions, such as requiring more than one person to approve a later payment.

### How it works

When the recipient later spends the funds, the wallet reveals the conditions and proves that they match the earlier commitment. It must also satisfy them. This separates the simple act of paying an address from the more complex arrangements for spending what it receives.

### What the evidence does not prove

The specification discusses controversy over the design and deployment. Technical changes have trade-offs and adoption processes; they are not simply features switched on by a company.

- [BIP 16 · specification and deployment rules](https://bips.dev/16/)

## 2012-09-27 — An organisation cannot own the rules.

ID: bitcoin-foundation · Documented

Gavin Andresen announced the Bitcoin Foundation on 27 September 2012. It aimed to support and promote the open-source project.

### Why it matters

Funding, public communication and developer support require coordination. An organisation can help with those tasks while raising questions about who represents users and whose priorities receive resources.

### What the evidence does not prove

The Foundation was not Bitcoin’s government. Its announcement did not give it authority to compel independent users or nodes to adopt software.

- [Gavin Andresen · Foundation announcement](https://bitcointalk.org/index.php?topic=113400.0)

## 2012-11-15 — Another way to pay for publishing.

ID: another-way-to-pay-for-publishing · Documented

WordPress.com announced bitcoin payments for upgrades, citing barriers in traditional payment networks. It was a concrete attempt to widen access to an online service. The announcement established availability at that time, not how many people used it or whether it remained available.

### What this changed

For a publishing platform, accepting another payment method can be a way to reach customers who cannot use its usual options. The human question is whether someone previously excluded can complete a useful purchase.

### What the evidence does not prove

WordPress's announcement explains its decision at that moment. Availability alone does not tell us how often customers used the method, whether it reduced total costs, or whether the company continued offering it.

- [WordPress.com — payment announcement, 15 Nov 2012](https://wordpress.com/blog/2012/11/15/pay-another-way-bitcoin/)

## 2012-11-28 — New issuance is cut in half.

ID: new-issuance-is-cut-in-half · Documented

At block 210,000, the subsidy fell from 50 to 25 bitcoin per block. The first halving demonstrated a scheduled change in new issuance. It did not cut existing balances, and it did not guarantee a price increase.

### What this changed

Miners can receive two different kinds of income: a subsidy created with a block and fees attached to included transactions. A halving reduces the subsidy under the existing schedule; it does not halve someone's wallet balance.

### How it works

The subsidy is only one part of a miner’s block revenue: transaction fees are additional. Halvings are determined by block height, not an exact four-year calendar or a price trigger.

### What the evidence does not prove

Predictable issuance is a rule about supply. Purchasing power also depends on demand and the wider economy. The schedule cannot promise that a household will preserve its savings or that a miner will remain profitable.

- [Bitcoin.org — halving history](https://bitcoin.org/en/halving)
- [Block 210,000 · first halving](https://mempool.space/block/210000)

## 2013-01 — Specialised machines enter the story.

ID: specialised-machines-enter-the-story · Documented

Avalon’s founder described shipping dedicated mining hardware in January 2013. Machines built for this one task changed the practical conditions for competing as a miner. The history of mining is also a history of equipment, capital, electricity and access.

### What this changed

An ASIC is a chip designed for a particular job. In mining, specialised equipment changed the practical competition from running general-purpose computers toward obtaining suitable machines and electricity.

### How it works

An application-specific integrated circuit fixes the relevant computation into silicon. Efficiency gains can be substantial, but this story deliberately avoids mixing specifications from different Avalon batches or later models.

### What the evidence does not prove

Open participation in software does not mean equal access to capital or infrastructure. The source here is an interview with a manufacturer about shipments, not a census of how every miner operated.

### About this date

January identifies the early Avalon shipment period. A manufacturer interview reports dispatch on 19 January; dispatch and delivery to a customer are different events. An exact delivery day is not asserted.

- [Avalon founder interview, 23 Jan 2013](https://bitcoinmagazine.com/business/avalon-ships-bitcoins-first-consumer-asics-1358905223)
- [Historical photograph · source and CC0 dedication](https://commons.wikimedia.org/wiki/File:Avalon-An_ASIC_base_bitcoin_machine.jpg)

Image: /assets/historical/avalon.jpg · 张楠赓 / N. G. Zhang · [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [Record](https://commons.wikimedia.org/wiki/File:Avalon-An_ASIC_base_bitcoin_machine.jpg)
Historical equipment photograph, uploaded in September 2013. Used to illustrate the January shipment period, not claimed to depict a specific delivery. Uncropped; scaled to fit.

Image: /assets/historical/usb.jpg · Targaryen · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [Record](https://commons.wikimedia.org/wiki/File:ASICMINER_USB_Block_Erupter.jpg)
Photograph dated 20 July 2013. The date identifies this photograph, not the product launch. Uncropped; scaled to fit.

Image: /assets/historical/chip.jpg · ngzhang · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [Record](https://commons.wikimedia.org/wiki/File:Avalon_ASIC_A3233.jpg)
Source image dated 30 July 2014; attributed to ngzhang through Wikimedia Commons. Date identifies the source image, not a claimed first shipment. Uncropped; scaled to fit.

Image: /assets/antminer-s9-2018.jpg · Steve Rainwater · [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [Record](https://commons.wikimedia.org/wiki/File:Antminer_ASIC_Miner.jpeg)
A later-generation miner, photographed in 2018. This is not the first Avalon unit shipped in 2013.

Image: /assets/avalon-a10-2019.jpg · Canaan · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Record](https://commons.wikimedia.org/wiki/File:Canaan_AvalonMiner_A10_Bitcoin_Mining_Machines.jpg)
A later generation of Avalon equipment, shown in a manufacturer-supplied 2019 photograph. It is not a photograph of the 2013 launch.

## 2013-03-11/12 — Two versions disagree.

ID: two-versions-disagree · Documented

A software compatibility problem split the network’s transaction history temporarily. Developers, mining pools and services coordinated a response, including rolling miners back to an older version. Agreement was restored through both code and human decisions.

### What this changed

Computers running different versions temporarily disagreed about which history they could accept. A shared ledger is useful only when participants can converge on the same valid record.

### How it works

Consensus compatibility involves implementation behavior as well as written rules. Emergency coordination has visible social and economic participants.

### What the evidence does not prove

The post-mortem describes coordination, a rollback and a double spend during the incident. That record is more informative than a claim that the system has always worked without interruption. Compatibility and emergency response are part of its history.

- [BIP 50 — March 2013 post-mortem](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki)
- [Contemporary network alert](https://bitcoin.org/en/alert/2013-03-11-chain-fork)

## 2013-03-18 — Rules reach the gateways.

ID: rules-reach-the-gateways · Documented

US FinCEN guidance distinguished people using virtual currency from businesses exchanging or transmitting it. An open payment network did not remove obligations from the companies connecting it to ordinary money. The boundary between a protocol and a service became important.

### What this changed

Someone paying for an item and a business exchanging money for customers have different roles. FinCEN's guidance made those distinctions central to the US treatment of virtual-currency activity.

### How it works

The classification turns on activities, not whether a system has a central server. Transmitting value for others can create obligations even when the underlying currency is decentralized.

### What the evidence does not prove

A protocol can remain open while its gateways face legal duties. This was US guidance for particular activities, not a worldwide rule and not a statement that every person using bitcoin became a money transmitter.

- [FinCEN — 18 Mar 2013 guidance](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering)

## 23 July 2013 — A Bitcoin balance can hide an old fraud.

ID: bitcoin-savings-trust · Documented

The SEC brings a case against Bitcoin Savings and Trust, alleging that promised returns were funded with later investors’ deposits rather than genuine trading profits.

### How it works

A scheme denominated in bitcoin can reproduce familiar investment fraud. Network settlement does not verify a promoter’s business model or liabilities.

### What the evidence does not prove

The object is the 2013 charging document: allegations are identified as such, not silently treated as findings on that date. The story does not repeat promotional return promises as opportunities.

- [SEC charging announcement](https://www.sec.gov/newsroom/press-releases/2013-132)

## 22 August 2013 — Privacy becomes a coordination problem.

ID: coinjoin · Documented

A public proposal describes people combining their payments into one transaction. This makes it harder for an outside observer to assume that every input belongs to the same person. It changes how a transaction is assembled, without changing Bitcoin’s shared validation rules.

### How it works

Imagine several people paying together, rather than each leaving a separate, easily matched receipt. The visible record becomes harder to interpret, but amounts, coordination and later spending may still reveal connections. Privacy depends on how the tool is used, not simply on its name.

### What it meant for people

People can have ordinary reasons to avoid publishing their financial relationships: a salary, a donation, a business supplier or a personal purchase. A public ledger makes that question difficult. The proposal offers one way to make certain inferences less reliable, while leaving a visible transaction history and other possible sources of identification.

### What the evidence does not prove

CoinJoin does not guarantee anonymity or erase public transaction history. Different implementations introduce different coordinator and operational risks.

- [Original CoinJoin proposal](https://bitcointalk.org/index.php?topic=279249.0)

## 10 September 2013 — A backup becomes a set of words.

ID: bip39 · Documented

A wallet backup becomes a list of words. BIP 39 describes how software turns randomly generated information into a recovery phrase and uses it to recreate a wallet’s secret keys. That makes backup less dependent on keeping one particular device working.

### How it works

Someone who loses a device may be able to restore access with the recovery information. Someone else who obtains that information may also be able to spend the funds. The readable words make the process easier to handle, but do not make the secret less powerful.

### What it meant for people

A family can face a practical problem after a device breaks or its owner dies: where is the recovery information, and who understands what it does? The design makes a backup portable, while making its protection and careful handling central to self-custody. A familiar-looking list of words carries unfamiliar responsibility.

### What the evidence does not prove

A mnemonic is not a safe invitation to invent a memorable sentence. BIP 39 is an application convention, not a consensus rule or a format used by every wallet.

- [BIP 39 specification](https://bips.dev/39/)

## 2013-10 — A marketplace is shut down.

ID: a-marketplace-is-shut-down · Documented

US authorities closed Silk Road and arrested its operator. The episode showed that using bitcoin did not place a business outside investigation or law enforcement. The later conviction belongs to 2015, rather than being folded into the date of the shutdown.

### What this changed

An online marketplace still has operators, infrastructure and connections to the wider world. Using a digital payment network did not remove those points of investigation.

### What the evidence does not prove

The shutdown and arrest belong to 2013; the later conviction belongs to a different date. This timeline does not turn an allegation into a conviction or use an old case summary to describe anyone's present legal status.

- [US DOJ — Silk Road indictment and operating period](https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-indictment-ross-ulbricht-creator-and-owner-silk-road)
- [US DOJ — Silk Road case review](https://www.justice.gov/usao/page/file/1106771/dl)

## 5 December 2013 — Banks face a new boundary.

ID: china-2013 · Documented

Chinese authorities restrict financial institutions’ involvement with Bitcoin while allowing individuals to trade at their own risk. The announcement begins a longer, changing relationship between Bitcoin and Chinese state policy.

### How it works

Restrictions on banking access can reshape exchange markets without changing the peer-to-peer protocol.

### What the evidence does not prove

This was not a December 2013 ban on every private holding or transaction. Later exchange, mining and trading restrictions belong to separate episodes.

### About this date

5 December is the public announcement. The joint instrument was dated 3 December 2013.

- [Contemporary policy report](https://www.bbc.com/news/technology-25233224)

## 18 December 2013 — A typo becomes a shared language.

ID: hodl · Documented

A volatile market day produces a rambling forum post whose misspelling becomes a durable community expression. HODL travels from a personal admission into slogans, jokes and identity.

### How it works

Bitcoin’s culture develops through ordinary participants, not only papers, exchanges and code releases.

### What the evidence does not prove

The story records language and belonging. It does not endorse holding an asset regardless of circumstances or treat a meme as an investment strategy.

- [Original HODL thread](https://bitcointalk.org/index.php?topic=375643.0)

## 9 January 2014 — Bitcoin reaches the checkout.

ID: merchant-adoption · Documented

Overstock announces that customers can pay with Bitcoin, with Coinbase processing and converting payments into dollars. Later that year, Microsoft documents a more limited digital-account funding option through BitPay.

### How it works

Commercial acceptance can spread through payment processors without merchants retaining bitcoin or operating their own nodes.

### What it meant for people

At checkout, a customer could choose bitcoin while the merchant received ordinary money through a processor. That arrangement could widen payment choice without making the retailer a long-term bitcoin holder. To assess adoption, we need to distinguish a button becoming available from customers repeatedly choosing to use it.

### What the evidence does not prove

The announcements do not establish that either company was the first retailer to accept bitcoin. Microsoft’s December documentation concerned selected digital purchases, initially in the US. Neither launch establishes present-day availability or how often customers used it.

### About this date

Overstock’s announcement was on 9 January. Microsoft’s separate, limited digital-account funding announcement through BitPay followed on 11 December 2014.

- [Overstock company announcement](https://www.prnewswire.com/news-releases/overstockcom-first-online-retailer-to-accept-bitcoin-239488961.html)
- [BitPay’s Microsoft announcement](https://www.bitpay.com/blog/microsoft-chooses-bitpay-to-power-bitcoin-payments)
- [Contemporary Microsoft scope check](https://www.bbc.com/news/technology-30377654)
- [BitPay: Microsoft payment announcement](https://www.bitpay.com/blog/microsoft-chooses-bitpay-to-power-bitcoin-payments)

## 28 February 2014 — When an exchange fails, users wait.

ID: when-an-exchange-fails-users-wait · Documented

Mt. Gox’s collapse became a defining custody crisis. Users depended on a company to safeguard assets and provide withdrawals. Years of investigation and rehabilitation followed. A functioning Bitcoin network could not automatically return assets missing from an exchange.

### What this changed

A customer may see a balance on a screen without controlling the keys to the underlying assets. If the business fails, withdrawing can become a matter for administrators, courts and a lengthy recovery process.

### How it works

An exchange’s internal balances are promises recorded in its own systems, not necessarily individually controlled on-chain outputs. Bitcoin consensus cannot compel a custodian to honor its liabilities or keep correct accounts.

### What the evidence does not prove

Mt. Gox makes the distinction tangible: the network could continue running while customers could not access what they believed they owned. Repayments began years later; that later step deserves its own place in the record.

- [US DOJ — Mt. Gox theft charges, 2023](https://www.justice.gov/usao-ndca/pr/russian-nationals-charged-hacking-one-cryptocurrency-exchange-and-illicitly-operating)
- [Mt. Gox trustee — notices](https://www.mtgox.com/)
- [Mt. Gox · original announcement PDF](https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf)

## 25 March 2014 — Spending can create paperwork.

ID: spending-can-create-paperwork · Documented

US tax guidance treated convertible virtual currency as property for federal tax purposes. Paying with it could therefore involve records and tax consequences. The practical experience of digital money depends on local institutions as well as software.

### What this changed

Treating an asset as property changes the experience of spending it. A purchase may require records of acquisition and disposal, even if the payment itself takes only a few steps in a wallet.

### How it works

Legal classification affects records, wages, gains and losses without altering the transaction format.

### What the evidence does not prove

This entry describes historical US federal guidance. It is not a universal tax rule. The broader lesson is practical: a convenient payment interface cannot remove the legal recordkeeping that may surround a transaction.

- [IRS — Notice 2014-21](https://www.irs.gov/pub/irs-drop/n-14-21.pdf)
- [IRS announcement](https://www.irs.gov/pub/irs-news/IR-14-036.pdf)

## June 2014 — Can an open network concentrate power?

ID: ghash · Attributed evidence · limits stated

Contemporary observers reported GHash.IO briefly accounting for more than half of observed block production. The episode turned concerns about mining concentration into a public controversy.

### How it works

A pool coordinates many miners; concentrated block production can enable censorship or competing spends even when participants can move their equipment elsewhere.

### What it meant for people

Small miners may join a pool to receive less unpredictable payouts. That individually useful choice can produce concentrated coordination at the network level. The episode makes an important tension visible: a service that helps individual participants can also become a point of influence. Moving equipment between pools and independently checking blocks are different safeguards.

### What the evidence does not prove

Contemporary reporting and the pool’s response establish the controversy, not an independently reconstructed hash-rate measurement here. A share of blocks over a short window is not permanent ownership of mining power. No attack is established by these sources, and majority hashing does not provide other people’s private keys.

- [Contemporary reporting and researcher interviews](https://arstechnica.com/information-technology/2014/06/bitcoin-security-guarantee-shattered-by-anonymous-miner-with-51-network-power/)
- [Pool’s later public commitment](https://techcrunch.com/2014/07/16/popular-bitcoin-mining-pool-promises-to-restrict-its-compute-power-to-prevent-feared-51-fiasco/)
- [Vitalik Buterin: contemporary discussion of mining concentration](https://blog.ethereum.org/en/2014/06/19/mining)
- [GHash.IO public response](https://pressat.co.uk/releases/ghashio-is-open-for-discussion-93ee9eeb66b80e94bbe31705d451780e/)

## 2014-07-29 — Keys get a separate device.

ID: keys-get-a-separate-device · Documented

Trezor launched its Model One hardware wallet. Dedicated signing devices offered another way to protect private keys. They changed the tools available for self-custody, while leaving users responsible for backups, recovery information and careful transaction approval.

### What this changed

A hardware wallet is a signing tool, not a box containing digital coins. Its purpose is to keep secret keys separate from a general-purpose computer while allowing the user to approve a transaction.

### How it works

Keeping keys apart from a networked computer reduces some attack paths; users still need to verify destinations and protect recovery material.

### What the evidence does not prove

A device does not remove the need for recovery information or careful checking. Losing a backup, approving a deceptive payment or trusting a fake device are different risks. The historical product photograph is included for context, not as a product recommendation.

- [Trezor — launch anniversary](https://trezor.io/blog/news/a-decade-of-pioneering-10-years-since-trezors-first-hardware-wallet-revolution)

## 23 February 2015 — Payments need not all settle separately.

ID: lightning-proposal · Documented

Joseph Poon and Thaddeus Dryja present a network of payment channels. Participants would exchange enforceable commitments and use Bitcoin’s chain to open channels or resolve disputes.

### How it works

The proposal shifts routine updates away from individual on-chain settlement while preserving an on-chain exit mechanism under its assumptions.

### What the evidence does not prove

These are February 2015 presentation slides, not evidence of a deployed global network. The familiar paper available today is a later revision; liquidity, monitoring and routing remain real constraints.

- [Original dated presentation](https://lightning.network/lightning-network.pdf)

## 2015-06-24 — Rules reach the businesses.

ID: a-licence-for-the-businesses-around-it · Documented

New York’s BitLicense rules took effect. Custody and exchange businesses faced a specialised regulatory framework. The social question is not only whether regulation protects users, but also how its costs affect which services can operate.

### What this changed

A business licence creates requirements for operating a service. It does not change the network's transaction rules, and it does not make every service using that network identical.

### How it works

Regulators can govern service providers even when the underlying payment network has no central operator.

### What the evidence does not prove

For customers, oversight and accountability matter. For providers, compliance has costs. Assessing the balance needs evidence about actual outcomes; the existence of a rule alone does not prove either better protection or reduced access.

- [NYDFS — virtual currency business licensing](https://www.dfs.ny.gov/virtual_currency_businesses)
- [NYDFS framework and historical timeline](https://www.dfs.ny.gov/apps_and_licensing/virtual_currency_businesses)

## 4 July 2015 — A signal is not a validation check.

ID: bip66-fork · Documented

After stricter signature rules are introduced, some miners build on blocks they have not fully validated. An alert warns that apparent confirmations can be misleading for affected software.

### How it works

Mining on top of a block header is not equivalent to verifying that block’s transactions and rules.

### A closer historical detail

Strict DER encoding gives signatures a consistent format. A central purpose was to stop consensus from depending on differences in how OpenSSL versions interpreted signatures. Miner signalling was not the same thing as actually validating blocks under the new rules.

### What the evidence does not prove

The alert was updated as the incident unfolded. This is a lesson about implementation and validation, not a claim that all lightweight wallets or every miner behaved identically.

- [Contemporary invalid-block alert](https://bitcoin.org/en/alert/2015-07-04-spv-mining)
- [BIP 66 · signature encoding](https://bips.dev/66/)

## 17 September 2015 — A new asset meets an existing law.

ID: cftc-commodity · Documented

In an action over an unregistered options platform, the CFTC finds that Bitcoin and other virtual currencies fall within the Commodity Exchange Act’s commodity definition.

### How it works

Derivatives oversight develops around Bitcoin’s markets, distinct from the rules that nodes apply to blocks.

### What the evidence does not prove

A commodity finding is not approval of every exchange, a guarantee of safety, or a universal legal classification across countries and statutes.

- [CFTC order announcement](https://www.cftc.gov/PressRoom/PressReleases/7231-15)

## 2015-10-22 — Europe draws a tax distinction.

ID: europe-draws-a-tax-distinction · Documented

The EU Court of Justice ruled that exchanging traditional currencies for bitcoin was exempt from VAT under the relevant financial-services provision. This was a ruling about a particular service and tax. It did not make every bitcoin transaction tax-free.

### What this changed

Tax categories can separate exchanging money from buying goods or realising an investment gain. The court's ruling addressed the VAT treatment of the exchange service before it.

### What the evidence does not prove

It is easy for a narrow legal decision to become an overbroad headline. Exemption for that service did not mean every bitcoin-related activity was tax-free, nor did it create a common rule for every other tax.

- [CJEU — Hedqvist, 22 Oct 2015](https://curia.europa.eu/site/upload/docs/application/pdf/2015-10/cp150128en.pdf)

## 13 November 2015 — A script can require patience.

ID: cltv · Documented

Bitcoin Core 0.11.2 includes support for CHECKLOCKTIMEVERIFY, allowing scripts to enforce a minimum date or block height before a spending path becomes usable.

### How it works

Absolute timelocks strengthen refund and contract constructions that later support payment-channel systems.

### What the evidence does not prove

This story dates the software release, not the proposal or the later network enforcement threshold. A timelock does not schedule an automatic payment or guarantee that funds will move.

### About this date

13 November identifies the release of Bitcoin Core 0.11.2 with CLTV support, not the separate activation of the consensus rule.

- [Core 0.11.2 release notes](https://bitcoin.org/en/release/v0.11.2)
- [BIP 65 specification](https://bips.dev/65/)

## 21 February 2016 · meeting date — An agreement is not a protocol change.

ID: hongkong · Documented

Industry representatives and some development-community members publish a roadmap pairing SegWit with work toward a larger-block hard fork. The statement makes broad support a condition. It records one coalition’s proposed path through the scaling dispute.

### How it works

A soft fork tightens validity rules; a hard fork can make previously invalid blocks valid. Publishing an agreement does not update independently operated nodes or guarantee that users will adopt the proposal.

### What the evidence does not prove

Larger-block advocates emphasized transaction capacity and fees; critics emphasized validation costs, decentralization and consent. Neither signatories nor this project speak for a single unified Bitcoin community.

- [Roundtable · original signed statement](https://medium.com/@bitcoinroundtable/bitcoin-roundtable-consensus-266d475a61ff)

## 23 February 2016 — An unconfirmed payment can compete again.

ID: optin-rbf · Documented

Core 0.12 introduces an opt-in replacement policy for unconfirmed transactions. A sender can signal that a higher-fee alternative may replace the earlier transaction in participating mempools.

### How it works

Fee management becomes more flexible, while merchants must distinguish unconfirmed acceptance from confirmed settlement.

### What the evidence does not prove

This is relay policy, not a consensus activation or a way to undo confirmed payments. The release did not yet provide wallet creation of BIP 125 replaceable transactions.

- [Core 0.12.0 release notes](https://bitcoincore.org/en/releases/0.12.0/)

## 4 July 2016 · UTC — A coin can carry its own waiting period.

ID: csv · Documented

The deployment of relative-locktime rules gives Bitcoin scripts a way to require an output to age before a spending path is available.

### How it works

BIPs 68, 112 and 113 provide building blocks for channel safety and time-dependent contracts. Relative age differs from an absolute calendar deadline.

### A closer historical detail

These changes help make waiting periods enforceable. A relative lock measures age from a previous output; other locks refer to a block height or a time threshold. Payment-channel designs can use these delays to give participants time to respond. They do not make every payment instant or remove the need to monitor a channel.

### What the evidence does not prove

Activation is separate from the earlier proposal dates and software support. These tools do not by themselves create a complete Lightning implementation.

### About this date

Block 419,328 has a timestamp of 4 July 2016 at 23:16:01 UTC. That same instant was 5 July in Berlin. This timeline uses UTC for this activation.

- [BIP 68 deployment and semantics](https://bips.dev/68/)
- [BIP 112 specification](https://bips.dev/112/)
- [Activation-height block record](https://mempool.space/block/419328)

## 2016-07-09 — The second halving.

ID: the-second-halving · Documented

At block 420,000, the subsidy fell from 25 to 12.5 bitcoin. The schedule continued as the network grew. This is a useful checkpoint for explaining how miners receive newly issued coins and transaction fees.

### What this changed

The second halving applied the same scheduled mechanism to a larger network. The unit that changed was newly issued bitcoin per block, from 25 to 12.5.

### How it works

Subsidy changes alter the new issuance available to miners; transaction fees remain a separate component of revenue.

### What the evidence does not prove

Miners still faced equipment and electricity costs and could earn transaction fees. The rule did not determine their profit margins or the asset's price. Those depend on conditions beyond the issuance schedule.

- [Bitcoin.org — halving history](https://bitcoin.org/en/halving)
- [Block 420,000](https://mempool.space/block/420000)

## 2 August 2016 — A large theft exposes custody risk.

ID: a-large-theft-exposes-custody-risk · Documented

An attacker stole roughly 120,000 bitcoin from Bitfinex. The incident concerned exchange systems and control over funds. It became a long-running case about security, tracing and recovery, with a major seizure reported years later.

### What this changed

An exchange brings together trading, account systems and arrangements for signing withdrawals. A weakness in that service can expose customers even when the underlying network continues to enforce its transaction rules.

### How it works

Operational controls, access permissions and recovery processes matter alongside cryptographic design.

### What the evidence does not prove

The later recovery case shows the value of keeping records and investigating access to keys. It also shows a limit: identifying or seizing funds is not the same as promptly compensating every affected customer.

- [US DOJ — 2016 Bitfinex hack case](https://www.justice.gov/usao-dc/2016-bitfinex-hack)
- [US DOJ — Bitfinex seizure, 8 Feb 2022](https://www.justice.gov/archives/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency)
- [Bitfinex: contemporary security-breach notice](https://blog.bitfinex.com/announcements/security-breach/)

## 1 April 2017 — Recognition comes with registration.

ID: japan-regime · Documented

Japan brings virtual-currency exchange services into a registration and supervision regime. The change follows the collapse of Mt. Gox and places consumer protection and anti-money-laundering controls around trading businesses.

### How it works

A national framework can recognize a payment instrument and regulate intermediaries without changing Bitcoin itself.

### What the evidence does not prove

Recognition as a means of payment is not designation as Japanese legal tender. The FSA notice was published on 3 April and identifies 1 April as the effective date.

- [Financial Services Agency notice](https://www.fsa.go.jp/common/about/20170403.html)

## 2017-08-01 — One history, two paths.

ID: one-history-two-paths · Documented

Bitcoin Cash emerged through a hard fork with different rules. A shared past did not force all participants to choose the same future. The split helps explain why software, users, miners and markets all matter when a network disagrees.

### What this changed

A hard fork creates rules that older software may not accept. In this case, people could continue on separate networks with a shared earlier history and different futures.

### How it works

A hard fork can create incompatible validation rules and competing assets. Neither a company statement nor a shared ticker settles which rules a user accepts.

### What the evidence does not prove

Bitcoin Cash and Bitcoin are separate assets and networks. Calling the split an automatic upgrade of BTC hides the disagreement. A common origin does not mean that later balances, market values or software are interchangeable.

### About this date

The IRS memorandum identifies 1 August and the last common block, 478,558. The historical Bitcoin ABC release documents the fork rules. A rule’s median-time threshold is not the timestamp of the first separate block.

- [Bitcoin ABC — fork activation source](https://www.bitcoinabc.org/doc/dev/kernel_2chainparams_8cpp_source.html)
- [Contemporary chain-split reporting](https://www.bbc.com/news/technology-40800270)
- [Bitcoin ABC 0.14.6: historical fork specification](https://github.com/Bitcoin-ABC/bitcoin-abc/blob/a46e63c2bb3d189beb846a8d34a0d33fd563fa7b/doc/abc/uahf-technical-spec.md)
- [IRS memorandum: Bitcoin Cash fork chronology](https://www.irs.gov/pub/irs-wd/202114020.pdf)

## 24 August 2017 — An upgrade creates more room.

ID: an-upgrade-creates-more-room · Documented

SegWit changed how transaction data is accounted for and addressed transaction malleability. It helped support later payment-layer development. An upgrade could improve efficiency without removing every limit on transaction capacity or cost.

### What this changed

A transaction's identifier used to be vulnerable to certain changes that did not alter who was paid. SegWit addressed this malleability problem and changed how some transaction data counted toward block limits.

### How it works

SegWit addresses involuntary transaction malleability for applicable transactions and changes capacity accounting to block weight. It supports more robust constructions for off-chain payment protocols.

### What the evidence does not prove

That provided useful building blocks for later systems, including payment channels. It did not make block space unlimited or guarantee low fees. Implementation details matter because an upgrade solves specific problems, not every problem at once.

- [Bitcoin Optech — Segregated witness](https://bitcoinops.org/en/topics/segregated-witness/)
- [BIP 141 · consensus specification](https://bips.dev/141/)
- [Block 481,824 · activation record](https://mempool.space/block/481824)

## August 2017 — A merchant can run the payment processor.

ID: btcpay · Documented

Nicolas Dorier starts BTCPay Server as an open-source alternative for merchants who want more control over Bitcoin acceptance. The project grows amid disagreement over payment intermediaries and the 2017 scaling dispute.

### How it works

Self-hosted invoicing can connect commerce directly to a merchant’s wallet rather than requiring a processor to hold funds.

### What the evidence does not prove

The month follows the creator’s retrospective account, not a universal production launch. Self-hosting introduces maintenance and security responsibilities and is not frictionless fiat conversion.

### About this date

The creator’s account supports August, without an exact start day. This month-level record follows precisely dated August events; its position does not establish their order within the month.

- [Creator’s retrospective](https://medium.com/@nicolasdorier/btcpay-server-is-growing-5e170452c7c5)

## 8 November 2017 — The second step is suspended.

ID: 2x · Documented

Leading SegWit2x organizers announce that they are suspending the planned larger-block upgrade, saying that sufficient consensus has not been built. The decision separates the completed SegWit change from a proposed hard fork that did not follow the organizers’ plan.

### How it works

An upgrade proposal can have code and powerful backers without becoming the shared rule set. Compatibility, economic acceptance and independently chosen software all matter.

### What the evidence does not prove

The email presents its authors’ interpretation of the earlier events. Their claim to have broken the deadlock is not treated here as a neutral historical verdict; the debate had multiple participants and causes.

- [Preserved reproduction · organizers’ email](https://bitcointalk.org/index.php?topic=2376285.msg24262151)

## 2017-12-18 — Price exposure finds another route.

ID: bitcoin-enters-a-derivatives-market · Documented

CME introduced bitcoin futures for the December 18 trading date. Financial institutions gained a regulated route to trade price exposure. A futures contract was a different product from holding bitcoin or using it to make a payment.

### What this changed

A futures contract creates an agreement tied to a price. A trader can use it to manage or take price exposure without using bitcoin as a day-to-day payment method.

### How it works

A futures contract provides contractual price exposure; it is not the same object as a bitcoin controlled with a private key.

### What the evidence does not prove

This was one step in financial integration, not evidence of everyday adoption. It also introduced another set of intermediaries and product rules. The December 18 date is the trading date, not a claim that all activity began at midnight.

- [CME — initial futures listing notice](https://www.cmegroup.com/notices/ser/2017/12/SER-8051R.html)
- [CFTC self-certification statement](https://www.cftc.gov/PressRoom/PressReleases/7654-17)

## 2017 · governance retrospective — Who gets to change the rules?

ID: who-gets-to-change-the-rules · Documented

The scaling dispute exposed different priorities: transaction capacity, verification costs and control over upgrades. SegWit activation and competing proposals made governance visible. Bitcoin had no single executive who could settle the disagreement for everyone.

### What this changed

More room for transactions can sound like a simple improvement. But larger or more demanding blocks can also affect the resources needed to check the system independently. Participants disagreed about those trade-offs and the way to implement changes.

### How it works

BIP 148 proposed enforcing a block-version signalling requirement from August. That proposal was distinct from SegWit’s activation on 24 August and the Bitcoin Cash split on 1 August. The SegWit2x plan was suspended on 8 November.

### What the evidence does not prove

No single chief executive could order everyone to adopt one answer. Software choices, miners, services and users all mattered. The dispute is best understood as competing priorities, rather than a story with one side owning all the reasonable arguments.

### About this date

This is a retrospective of the 2017 dispute. It appears at the end of that year; 31 December is an ordering convention, not the date of a single governance decision.

- [Bitcoin Optech — Segregated witness](https://bitcoinops.org/en/topics/segregated-witness/)
- [BIP 148 — activation proposal](https://bitcoin.org/bip/148/)
- [BIP 148 · specification](https://bips.dev/148/)
- [BIP 91 · related activation mechanism](https://bips.dev/91/)

## 26 February 2018 — A protocol upgrade reaches the wallet.

ID: bech32 · Documented

Bitcoin Core 0.16.0 adds full SegWit wallet and user-interface support, including native Bech32 addresses. Activation of consensus rules and adoption by everyday software are separate moments; this release makes that distinction visible.

### How it works

Address encoding conveys a destination and includes error detection; it is not itself a new currency. Supporting a format in software helps people use transaction types already permitted by consensus.

### A closer historical detail

The address specification and its arrival in wallet software are separate milestones. BIP 173 defines a native SegWit address format with error detection; the 2018 software release made that format available in Bitcoin Core’s wallet. Error detection is not protection against sending to the wrong valid recipient.

### What the evidence does not prove

These are historical release notes, not a download recommendation. The linked historical page warns that this obsolete version is no longer available there for security reasons.

- [Original Bitcoin Core 0.16.0 release notes](https://bitcoin.org/en/release/v0.16.0)
- [BIP 173 · Bech32](https://bips.dev/173/)

## 2018-03-15 — Payments try another layer.

ID: payments-try-another-layer · Documented

Lightning Labs released the first mainnet beta of lnd. Payment channels offered a way to make repeated payments without placing each one directly on the base chain. Liquidity, routing and wallet design introduced their own practical challenges.

### What this changed

A payment channel lets participants update their arrangement without recording every update directly on Bitcoin's base chain. Opening and settling channels still connect the system to the underlying network.

### How it works

Payment channels use Bitcoin transactions for opening and settlement while allowing off-chain state updates. Routing extends payments across channels, introducing liquidity, availability and operational constraints.

### What the evidence does not prove

A payment also needs a workable route and enough available liquidity. Wallet design and service providers can hide some complexity, while creating new dependencies. A beta release demonstrated software progress, not universal readiness for every user.

- [Lightning Labs — lnd 0.4-beta, 15 Mar 2018](https://lightning.engineering/posts/2018-03-15-lnd-beta/)

## 20 September 2018 — A serious bug is disclosed.

ID: a-serious-bug-is-disclosed · Documented

Bitcoin Core developers patched and disclosed a vulnerability that could crash affected software and potentially inflate supply. They reported no known exploitation at the time. Security depended on review, coordinated disclosure and users upgrading.

### What this changed

A disclosed vulnerability is a warning about what could happen, not necessarily a record of what did happen. Developers reported no known exploitation when they explained this flaw.

### How it works

Duplicate-input handling and validation behavior can threaten intended issuance rules. Responsible disclosure must balance operator coordination against giving attackers a ready-made exploit.

### What the evidence does not prove

Security work includes reviewing code, coordinating fixes and encouraging upgrades before an attacker can take advantage. This less visible maintenance is as important to the story as launches, market headlines and public promises.

### About this date

The vulnerability was reported privately on 17 September, patched on 18 September and fully disclosed on 20 September. This entry is anchored to the full disclosure.

- [Bitcoin Core — CVE-2018-17144](https://bitcoincore.org/en/2018/09/20/notice/)

## 3 October 2018 — A transaction can travel before it is signed.

ID: psbt · Documented

Bitcoin Core 0.17 adds support for a common way to pass an unfinished transaction between wallets and signing devices. Called PSBT, the format packages the payment details and supporting information so different tools can cooperate.

### How it works

A company might require more than one person to approve spending. A person might keep signing keys on a separate device. A shared format helps these tools exchange the information they need without requiring every wallet maker to invent a different arrangement.

### What the evidence does not prove

The 2018 date marks support in Bitcoin Core, not the earlier proposal. A standard format helps tools communicate; it does not itself guarantee secure devices or sound approval policies. This is software coordination, not a change to Bitcoin’s monetary rules.

### About this date

The Bitcoin Core announcement is dated 2 October; bitcoin.org and binary availability identify 3 October. This entry uses availability, not a claim that every announcement had the same date.

- [Core 0.17 release notes](https://bitcoincore.org/en/releases/0.17.0/)
- [BIP 174 format](https://bips.dev/174/)
- [Core 0.21 release notes](https://bitcoincore.org/en/releases/0.21.0/)

## 19 January 2019 — A small payment becomes a relay.

ID: lightning-torch · Documented

Hodlonaut starts a social experiment in which participants pass a Lightning payment onward, adding a little before handing it to someone they trust. The relay makes a young payment system visible through people rather than throughput claims.

### How it works

A community demonstration tests usability and coordination across borders while relying on participants to keep passing the payment.

### What the evidence does not prove

A successful relay is not a representative measure of reliability, decentralization or mass adoption. Custody choices and Lightning’s technical constraints still matter.

### About this date

The original post proposed starting with 100,000 satoshis and adding 10,000 at each hand-off. It establishes the proposal and date, not proof that every later relay followed those terms.

- [Contemporary report and participant interview](https://www.coindesk.com/markets/2019/02/05/bitcoins-lightning-torch-explained-what-it-is-and-why-it-matters)
- [Hodlonaut: original Lightning Torch proposal](https://x.com/hodlonaut/status/1086703428791865345)

## 2019-06-21 — Identity checks cross borders.

ID: identity-checks-cross-borders · Documented

FATF clarified international standards for virtual assets and their service providers. The development belongs in a story about money crossing borders: network access, regulated intermediaries and information-sharing requirements do not follow the same boundaries.

### What this changed

International standards try to prevent gaps between jurisdictions from becoming opportunities for money laundering. Implementing those standards depends on national rules and the activities of service providers.

### How it works

The travel-rule approach concerns information shared by covered providers, not extra identity fields inserted into Bitcoin’s base transaction format.

### What the evidence does not prove

A technical network can cross borders while identity and reporting requirements remain uneven. The standards did not instantly create identical laws everywhere. For a user, the exchange or payment service can be a decisive part of the experience.

- [FATF — virtual-asset standards, 21 Jun 2019](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Public-statement-virtual-assets.html)
- [FATF plenary outcomes](https://www.fatf-gafi.org/en/publications/Fatfgeneral/Outcomes-plenary-june-2019.html)
- [US Treasury plenary remarks](https://home.treasury.gov/news/press-releases/sm713)

## 28 August 2019 — A spending policy becomes easier to inspect.

ID: miniscript · Documented

Developers invite review of Miniscript, a structured way to represent and analyze Bitcoin scripts. Wallets can reason about signatures, timelocks and alternative spending paths instead of handling each design as a separate special case.

### How it works

Machine analysis helps estimate satisfaction requirements and combine policies, including workflows using PSBT.

### What the evidence does not prove

This dates the public request-for-comments period, not the earliest presentation or a consensus activation. Better tooling does not make an unsafe policy safe automatically.

- [Contemporary technical review](https://bitcoinops.org/en/newsletters/2019/08/28/)

## 12–13 March 2020 — An open network meets a global shock.

ID: pandemic-market-shock · Documented

Bitcoin markets fell sharply during the March 2020 financial turmoil. Trading continued, but leveraged positions and forced liquidations exposed users to risks beyond the protocol.

### Why it matters

A system can keep producing blocks while people lose money through market exposure. Borrowing magnifies losses and can force sales when liquidity is already strained.

### What the evidence does not prove

A market episode does not establish a permanent relationship between Bitcoin and stocks. Exact prices depend on venue and time; network availability is not price stability.

### About this date

This is a two-day market shock, not a single universal price quote. The cited presentation is hosted by the CFTC; hosting does not turn its analysis into an official agency finding.

- [CFTC-hosted presentation · March 2020 markets](https://www.cftc.gov/media/4246/TAC071620_BTCStockVolatility/download)

## 2020-05-11 — The third halving.

ID: the-third-halving · Documented

At block 630,000, the subsidy fell to 6.25 bitcoin. The change affected new issuance and miners’ subsidy income. It did not establish that bitcoin would protect a household from inflation or market stress.

### What this changed

The third halving reduced the subsidy from 12.5 to 6.25 bitcoin per block. It changed the flow of new coins under the existing rules, not the amount already held by users.

### How it works

Bitcoin’s issuance schedule is enforced through block validation rather than a discretionary response to the economic cycle.

### What the evidence does not prove

A scheduled supply change is sometimes used to tell a broader story about inflation protection. That conclusion does not follow automatically. Households face spending needs and price swings that a protocol schedule cannot settle.

- [Bitcoin.org — halving history](https://bitcoin.org/en/halving)
- [Block 630,000](https://mempool.space/block/630000)

## 2020-08-11 — Bitcoin joins a corporate treasury.

ID: bitcoin-joins-a-corporate-treasury · Documented

MicroStrategy made bitcoin its primary treasury reserve asset and reported substantial purchases during the third quarter. Shareholders became exposed to a corporate decision about holding bitcoin. That is different from a company using it mainly for customer payments.

### What this changed

A treasury decision places an asset on a company's balance sheet. Shareholders can then be affected by that exposure even if they never open a bitcoin wallet themselves.

### How it works

Corporate exposure is governed through company management, securities disclosures and shareholder risk—not the same arrangement as personal self-custody.

### A closer historical detail

On 11 August 2020, MicroStrategy announced that it had acquired 21,454 bitcoin for $250 million including fees and expenses. This is the initial purchase announcement; later quarterly figures describe a different reporting period.

### What the evidence does not prove

The company's report establishes its purchases and stated policy. Its reasons for favouring the asset remain management's judgment. A corporate holding is not proof that employees, customers or the wider public are using bitcoin as money.

- [MicroStrategy — Q3 2020 report](https://www.strategy.com/press/microstrategy-announces-third-quarter-2020-financial-results)
- [Company release filed with the SEC](https://www.sec.gov/Archives/edgar/data/1050446/000119312520215604/d921849dex991.htm)
- [MicroStrategy · SEC filing](https://www.sec.gov/Archives/edgar/data/1050446/000119312520215604/d921849d8k.htm)

## 21 October 2020 — A familiar account gains a Bitcoin balance.

ID: paypal · Documented

PayPal announces the ability to buy, hold and sell selected cryptocurrencies, including Bitcoin, through its account system. Distribution expands through a familiar consumer interface and regulated partners.

### How it works

A custodial account offers a different set of rights and capabilities from holding private keys. The announcement also outlines later merchant-payment plans involving conversion to fiat.

### What the evidence does not prove

Do not treat future merchant plans as already available worldwide in October 2020. The initial service was US-focused and did not mean users had unrestricted on-chain withdrawal capabilities.

- [PayPal announcement and dated rollout update](https://newsroom.paypal-corp.com/2020-10-21-PayPal-Launches-New-Service-Enabling-Users-to-Buy-Hold-and-Sell-Cryptocurrency)
- [NYDFS authorization announcement](https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202010211)

## 2020-11-05 — A public record leaves a trail.

ID: a-public-record-leaves-a-trail · Documented

US authorities announced a seizure linked to funds associated with Silk Road. Transaction records can support an investigation when combined with other evidence. An address is not a person’s name, but using addresses does not guarantee anonymity.

### What this changed

Bitcoin transactions can leave durable public connections between addresses. Investigators may combine those connections with records, searches or other evidence to identify who controlled funds.

### What the evidence does not prove

An address is not a verified identity. Tracing a path alone does not establish ownership or intent. The seizure illustrates how a public record can assist an investigation, not that every payment can always be attributed to a person.

- [US DOJ — Silk Road-related seizure, Nov 2020](https://www.justice.gov/usao-ndca/pr/united-states-files-civil-action-forfeit-cryptocurrency-valued-over-one-billion-us)

## 2020 · reported cases — Funding when banking access is blocked.

ID: funding-when-banking-access-is-blocked · Attributed evidence · limits stated

Human Rights Foundation reported bitcoin fundraising by civil-society groups in several countries facing financial restrictions. These cases suggest a role where ordinary payment channels are difficult to use. They do not establish that bitcoin is safe, accessible or effective for everyone.

### What this changed

When ordinary payment routes are blocked, another route may help a group receive support. But receiving a digital asset is only one step; converting it, securing it and protecting the people involved can remain difficult.

### What the evidence does not prove

The evidence here comes from Human Rights Foundation, which supports Bitcoin. Its accounts are useful examples, not an independent measure of success everywhere. A public ledger can also create privacy risks for vulnerable users.

### About this date

HRF’s 2020 annual report describes cases in Belarus, Nigeria, Russia and Hong Kong. These are attributed organisational reports, not independently audited outcomes. Placement at year-end groups the annual account; the URL’s directory date is not a verified publication date.

- [HRF 2020 annual report: Bitcoin and civil society](https://hrf.org/wp-content/uploads/2020/11/2020-HRF-Annual-Report-V2.pdf#page=20)

## 18 February 2021 — The spot-fund story is not only American.

ID: purpose-etf · Documented

The Toronto Stock Exchange lists Purpose Bitcoin ETF, providing brokerage-account exposure through a fund holding bitcoin. This precedes the US spot-product approvals of 2024.

### How it works

A fund share packages custody and administration inside securities-market infrastructure. Share ownership differs from control of the underlying keys.

### What it meant for people

For a brokerage customer, the practical change was access through an existing account rather than learning to manage keys. The trade-off was continued reliance on fund administrators and custodians. Canada’s example also prevents a misleading story in which financial access began only with the later US approvals.

### What the evidence does not prove

The venue describes the product as a direct-custody Bitcoin ETF. The project avoids an unqualified global first claim across every exchange-traded product structure.

- [Toronto Stock Exchange launch announcement](https://investors.tmx.com/English/News--Events/news/news-details/2021/Toronto-Stock-Exchange-Lists-Worlds-First-Bitcoin-ETF-2021-2-18/default.aspx)

## January–May 2021 — A company tries payments, then stops.

ID: a-company-tries-payments-then-stops · Documented

Tesla reported buying bitcoin, accepting it for some products and suspending payment acceptance in May. Holding an asset and using it as money are separate decisions. A launch announcement is not the same as a lasting payment habit.

### What this changed

A company can hold bitcoin as an asset while deciding not to accept it at checkout. Those choices involve different practical questions: treasury risk, payment processing, customer demand and corporate policy.

### How it works

Corporate adoption can involve separate decisions about treasury assets and customer payments; one does not imply the permanence of the other.

### What the evidence does not prove

Tesla's filing documents decisions during 2021. It does not establish a permanent payment policy. The episode is a reminder to follow what happens after an adoption announcement, rather than treating a launch as an irreversible trend.

### About this date

Tesla reported its purchase in the first quarter, began accepting bitcoin for certain products in March and suspended acceptance in May. This multi-step account is placed at the end of its stated period; it does not imply payments were accepted in January.

- [Tesla — Q2 2021 SEC filing](https://www.sec.gov/Archives/edgar/data/1318605/000095017021000524/tsla-20210630.htm)
- [Tesla annual report](https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm)
- [Contemporary suspension report](https://www.reuters.com/technology/tesla-stops-taking-bitcoin-cites-fossil-fuel-use-mining-cybercurrency-2021-05-12/)

## 2021-06 — Mining moves across borders.

ID: mining-moves-across-borders · Documented

China’s crackdown disrupted mining and changed where computing power was located. Cambridge later documented relocation and evidence of continuing activity inside China. Geography matters for electricity, regulation and local communities; a ban did not make the global network disappear.

### What this changed

Mining depends on physical sites and access to electricity. Regulation can disrupt those sites and encourage operators to move, even though the software can continue running elsewhere.

### How it works

Hashrate can move geographically while the network continues adjusting difficulty. Access to energy, infrastructure and legal permission shapes this supposedly placeless system.

### What the evidence does not prove

Location data is estimated from samples and can be obscured. Cambridge's later findings complicate a simple story that mining inside China vanished forever. Relocation also changes which communities experience the infrastructure and its costs.

- [Cambridge — mining relocation and resurgence](https://www.jbs.cam.ac.uk/2022/bitcoin-mining-new-data-reveal-a-surprising-resurgence/)
- [Cambridge’s July analysis](https://www.jbs.cam.ac.uk/2021/new-data-reveals-timeline-of-chinas-bitcoin-mining-exodus/)
- [Cambridge’s subsequent geographic update](https://www.jbs.cam.ac.uk/2021/geographic-shift/)

## 2021-09-07 — A national experiment begins.

ID: a-national-experiment-begins · Documented

El Salvador launched its bitcoin legal-tender policy and the Chivo wallet. The policy brought questions about payment choice, public spending and trust into everyday settings. Its later use and revisions must be shown alongside the initial announcement.

### What this changed

A national policy puts an experimental technology into contact with merchants, taxpayers and public institutions. The questions become concrete: what must a shop accept, who pays for infrastructure and what do residents actually choose?

### How it works

Legal recognition does not change Bitcoin’s consensus rules. Government-backed payment infrastructure and custodial applications introduce institutions and implementation choices on top of the network.

### A closer historical detail

The law took effect on 7 September 2021. Chivo supported both dollars and bitcoin. A legal requirement, a subsidised wallet download and repeated voluntary use are different measures of adoption.

### What the evidence does not prove

The launch is only the beginning of the evidence. Research on usage, later legal reforms and changes to Chivo ownership provide different parts of the story. None should be hidden behind the original announcement.

- [IMF — El Salvador country report 25/58](https://www.elibrary.imf.org/abstract/journals/002/2025/058/article-A001-en.xml)
- [IMF · 2021 mission statement](https://www.imf.org/en/news/articles/2021/11/22/mcs-el-salvador-staff-concluding-statement-of-the-2021-article-iv-mission)

## 2021-10-19 — A fund can follow contracts, not coins.

ID: bito-futures-etf · Documented

ProShares BITO began trading in the United States on 19 October 2021. It provided exposure through bitcoin futures rather than directly holding bitcoin.

### Why it matters

A familiar brokerage account made a new kind of exposure easier to access. The product’s contract structure matters: its results need not match the spot price, and fees still apply.

### What the evidence does not prove

This was not the first spot Bitcoin fund worldwide, and owning a share did not give the investor bitcoin keys. Launch and regulatory filing dates should not be confused.

### About this date

The fund’s inception date was 18 October. First trading was 19 October, confirmed by the exchange’s launch post and a Cboe trading circular. Fund formation and first trading are different milestones.

- [ProShares · BITO launch](https://www.proshares.com/press-releases/proshares-to-launch-the-first-u.s.-bitcoin-linked-etf-on-october-19)
- [Cboe: BITO trading circular](https://cdn.cboe.com/resources/regulation/circulars/products/IC_2021-268.pdf)
- [NYSE: BITO launch-day post](https://x.com/NYSE/status/1450453932308717570)

## 14 November 2021 — Taproot changes what transactions can do.

ID: taproot-changes-what-transactions-can-do · Documented

Taproot activated new transaction capabilities, including Schnorr signatures and more flexible ways to spend coins. Some transactions could become more efficient or reveal less information. The upgrade did not make all bitcoin activity private.

### What this changed

Some spending arrangements can be represented more efficiently, and some details need not be revealed when they are not used. Taproot expanded that technical toolkit, including the use of Schnorr signatures.

### How it works

For a script-path spend, only the used script path and its proof need be revealed. Privacy and efficiency depend on the spending construction; the upgrade does not make all Bitcoin transactions anonymous.

### What the evidence does not prove

Privacy improvements are conditional on the transaction and how the tools are used. They do not turn a public transaction history into an anonymous system. An upgrade's capabilities and their real-world uptake are separate questions.

- [Bitcoin Optech — activation report, 17 Nov 2021](https://bitcoinops.org/en/newsletters/2021/11/17/)
- [BIP 341 · Taproot specification](https://bips.dev/341/)

## 2022-02-08 — Stolen funds can sometimes be recovered.

ID: stolen-funds-can-sometimes-be-recovered · Documented

US authorities reported recovering more than 94,000 bitcoin linked to the Bitfinex theft. Investigators obtained access to private keys through legally authorised searches. Recovery depended on the circumstances of this case, not a general undo button for payments.

### What this changed

Investigators combined the transaction trail with a search that yielded access to private keys. That access made a seizure possible in this particular case.

### What the evidence does not prove

There is no general customer-service button that reverses a Bitcoin payment. Seizing assets, proving a claim and returning money to victims are separate steps. The recovery should not be treated as a promise that all thefts can be undone.

- [US DOJ — Bitfinex seizure, 8 Feb 2022](https://www.justice.gov/archives/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency)

## 2022-03-04 — Donations cross borders during war.

ID: donations-cross-borders-during-war · Documented

Ukraine’s government reported receiving cryptocurrency donations after Russia’s invasion and listed bitcoin among accepted assets. Funds supported military and other purposes. This illustrates rapid cross-border fundraising, but mixed-asset totals must not be presented as bitcoin alone or as entirely humanitarian aid.

### What this changed

A publicly shared address can allow supporters in many places to send an asset directly. During war, that can create a fundraising route alongside banks and other donation channels.

### What the evidence does not prove

A donation total across several crypto assets is not a bitcoin total. The government's reported uses also included military support. Evaluating this episode requires clarity about the assets, recipients and purposes rather than a single uplifting headline.

- [Ukraine government — donation update, 4 Mar 2022](https://www.kmu.gov.ua/en/news/mincifri-na-pidtrimku-ukrayini-zibrali-53-mln-u-kriptoaktivah)

## 25 April 2022 — Does an incentive become a habit?

ID: does-an-incentive-become-a-habit · Documented

Research on El Salvador found limited and uneven sustained use of bitcoin and the Chivo wallet. Downloads and introductory incentives did not establish widespread everyday use. Understanding adoption requires asking what people keep doing after the launch campaign.

### What this changed

A download count measures installations, not an enduring payment habit. Introductory rewards can encourage people to try a wallet without persuading them to keep using it after the reward is gone.

### What the evidence does not prove

The study examined El Salvador's experience rather than every country or every type of wallet. Chivo could also hold dollars, so using Chivo did not necessarily mean using bitcoin. Survey findings need their period and method attached.

### About this date

This date is the BFI working-paper publication. The household survey was conducted in February 2022; a later version appeared in 2023. Publication, observation period and revision are separate dates.

- [Alvarez, Argente and Van Patten — NBER working paper 29968](https://www.nber.org/system/files/working_papers/w29968/w29968.pdf)
- [BFI: Are Cryptocurrencies Currencies?](https://bfi.uchicago.edu/working-paper/are-cryptocurrencies-currencies-bitcoin-as-legal-tender-in-el-salvador/)

## 16 May 2022 — A stablecoin defense consumes Bitcoin reserves.

ID: terra-reserves · Attributed evidence · limits stated

After TerraUSD loses its peg, Luna Foundation Guard reports deploying most of its Bitcoin reserves in an unsuccessful defense. The direct connection brings a non-Bitcoin project’s failure into Bitcoin’s market history.

### How it works

Bitcoin held by a reserve organization can be mobilized through trading counterparties. A reserve asset does not make another token’s stability mechanism reliable.

### What the evidence does not prove

16 May dates LFG’s disclosure about earlier reserve activity. The later JS Held report was commissioned and paid for by Terraform Labs and describes limits to the records available, including counterparties’ trading information. Neither source is an independent reconstruction of every trade or proof that reserve sales alone caused Bitcoin’s price movements.

- [Reuters contemporaneous account](https://www.reuters.com/markets/us/bitcoin-back-below-30000-european-regulators-renew-crypto-warnings-2022-05-16/)
- [CoinDesk report quoting reserve disclosure](https://www.coindesk.com/business/2022/05/16/luna-foundation-guard-left-with-313-bitcoin-after-ust-crash)
- [Luna Foundation Guard: reserve disclosure](https://x.com/LFG_org/status/1526126703046582272)
- [JS Held: commissioned LFG reserve report](https://www.lfg.org/audit/LFG-Audit-2022-11-14.pdf)

## 13 July 2022 — Yield accounts become bankruptcy claims.

ID: celsius · Documented

Celsius files for bankruptcy after freezing withdrawals in June. Customers who supplied bitcoin and other assets confront the difference between a platform balance and funds they can spend directly.

### How it works

Lending, collateral, liquidity and contractual ownership can transform a deposit into a claim against an institution.

### What the evidence does not prove

Celsius was a multi-asset lender, not Bitcoin’s consensus system. The episode belongs here because Bitcoin depositors and market liquidity were directly affected; the filing date is not a final recovery outcome.

- [Contemporary bankruptcy account](https://www.reuters.com/technology/crypto-lender-celsius-files-bankruptcy-2022-07-14/)
- [US Bankruptcy Court: Celsius procedural history](https://www.nysb.uscourts.gov/sites/default/files/opinions/298836_73_opinion.pdf#page=6)

## 11 November 2022 — An account balance is a promise.

ID: an-account-balance-is-a-promise · Documented

FTX’s failure exposed misuse of customer funds and dependence on an intermediary. Sam Bankman-Fried was convicted on 2 November 2023 and sentenced on 28 March 2024. Convenience can shift responsibility to a company without eliminating the need for trust.

### What this changed

When a company holds customer assets, the customer's experience depends on how that company actually handles them. A reassuring account screen does not reveal whether funds have been kept available or misused.

### How it works

An exchange interface can show balances without giving users direct control of corresponding on-chain assets. Proof of reserves alone also cannot establish the absence of undisclosed liabilities.

### What the evidence does not prove

FTX's case involved fraud and misuse of customer money. Its founder was later convicted and sentenced. This is different from a Bitcoin validation bug, but both belong in a history concerned with the people who bear losses.

- [US DOJ — Bankman-Fried sentencing, 28 Mar 2024](https://www.justice.gov/archives/opa/pr/samuel-bankman-fried-sentenced-25-years-his-orchestration-multiple-fraudulent-schemes)
- [BIS — Crypto shocks and retail losses, Feb 2023](https://www.bis.org/publ/bisbull69.pdf)
- [US Department of Justice · case and sentencing account](https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-prison)
- [DOJ: Bankman-Fried conviction, 2 November 2023](https://www.justice.gov/usao-sdny/pr/statement-us-attorney-damian-williams-conviction-samuel-bankman-fried)
- [DOJ: sentencing, 28 March 2024](https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-prison)
- [Louisiana OFI: FTX Chapter 11 filing](https://ofi.la.gov/ftx-files-chapter-11-bankruptcy/)

## 2022-12-21 — Brazil sets rules for service providers.

ID: brazil-sets-rules-for-service-providers · Documented

Brazil enacted a framework for virtual-asset services. It concerned the businesses surrounding assets such as bitcoin. Regulating services is different from declaring bitcoin a national currency or guaranteeing an investment.

### What this changed

A service framework addresses businesses that help customers exchange, transfer or safeguard assets. It can define responsibilities without changing Bitcoin's own transaction rules.

### How it works

A framework law sets direction and powers; implementing regulation, authorization and supervision are separate steps.

### What the evidence does not prove

For readers in Brazil, the sequence matters: a law sets a framework, a decree identifies the regulator and later rules shape supervision. None of those steps makes bitcoin Brazil's national currency or guarantees an investment.

- [Brazil — Law 14,478/2022](https://legis.senado.gov.br/norma/36622620/publicacao/36628501)
- [Official statutory text](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm)

## 20 February 2023 — The wider crypto crisis reaches users.

ID: the-wider-crypto-crisis-reaches-users · Documented

BIS research published in February 2023 examined the crypto turmoil of 2022 and estimated losses for many bitcoin app users. Terra/Luna and FTX failed for different reasons, but both affected people who trusted crypto markets and services.

### What this changed

Customers experienced losses and disruption across a sector containing very different businesses and tokens. Explaining those differences is necessary, but it should not erase the consequences for people who trusted the services.

### What the evidence does not prove

The BIS analysis used assumptions to estimate retail outcomes over its study period. It is not a ledger of every person's realised loss or a live measure of investor performance. Its result should be read with that method in mind.

### About this date

The date is the BIS publication, looking back at events including Terra’s collapse in May and FTX’s bankruptcy in November 2022. The study does not establish that those events occurred in February 2023.

- [BIS — Crypto shocks and retail losses, Feb 2023](https://www.bis.org/publ/bisbull69.pdf)

## 9 March 2023 — One public contact. Different on-chain destinations.

ID: silent-payments · Documented

Silent Payments specifies a way to publish a reusable payment contact while deriving distinct on-chain destinations. It addresses the privacy problem created by repeatedly posting an ordinary address.

### How it works

Sender and receiver key material helps derive outputs without a separate on-chain notification. Receiving wallets must perform additional scanning work.

### What the evidence does not prove

This is the BIP’s assigned date, not a 2024 consensus activation. Earlier discussion began in 2022; application support and complete anonymity must not be inferred from publication.

- [BIP 352 and recorded discussion history](https://bips.dev/352/)

## 6 April 2023 — A legal-tender decision is reversed.

ID: a-legal-tender-decision-is-reversed · Documented

The Central African Republic gave crypto assets legal-tender status in 2022, then removed relevant provisions in its revised 2023 law. The case shows why a national announcement needs follow-up, including the surrounding monetary and institutional constraints.

### What this changed

National announcements interact with existing monetary institutions, legal arrangements and practical infrastructure. A legal-tender decision alone cannot establish how residents will pay or save.

### What the evidence does not prove

The IMF’s account identifies the original law of 22 April 2022 and its revision by law 23.005 of 6 April 2023. This entry is dated to the reversal, not the earlier adoption. A legal change alone does not measure actual use by residents.

- [IMF — Central African Republic review 2023](https://www.elibrary.imf.org/view/journals/002/2023/362/article-A001-en.xml)

## 16 May 2023 — Europe adopts a shared framework.

ID: europe-adopts-a-shared-framework · Documented

The EU adopted MiCA to regulate parts of the crypto-asset market and its service providers. Adoption, application and transitional authorisation were separate stages. The timeline should follow those stages rather than display one permanent 'regulated' badge.

### What this changed

A shared European framework can reduce fragmentation, but adoption of legislation is only one stage. Rules then need application dates, supervision and decisions about existing providers.

### What the evidence does not prove

The timeline therefore separates 2023 adoption, 2024 application and the final 2026 transition deadline. A simple label saying regulated would hide which entity, service and date the claim actually concerns.

### About this date

This date marks Council adoption. Publication and entry into force followed in June 2023. The application stages in 2024 are separate timeline entries.

- [Council of the EU — digital finance](https://www.consilium.europa.eu/en/policies/digital-finance/)

## 2023-06-14 — Brazil identifies the supervisor.

ID: brazil-identifies-the-supervisor · Documented

A decree designated Brazil’s Central Bank as the regulator for the virtual-asset service framework while preserving the securities regulator’s remit. The distinction helps users understand that asset type and service activity can lead to different oversight.

### What this changed

Giving a regulator responsibility makes a legal framework more concrete. Brazil's Central Bank and securities regulator have distinct remits, so the type of activity and asset matters.

### What the evidence does not prove

For a customer, a familiar app name alone cannot explain which oversight applies. This decree belongs after the 2022 law and before later implementation, rather than being presented as a separate declaration of national currency.

### About this date

The decree was signed on 13 June, published on 14 June and took effect on 20 June 2023. This entry uses the publication date.

- [CVM — Decree 11,563, 14 Jun 2023](https://www.gov.br/cvm/pt-br/assuntos/noticias/2023/publicado-decreto-sobre-ativos-virtuais)
- [Brazil Chamber of Deputies: Decree 11,563](https://www2.camara.leg.br/legin/fed/decret/2023/decreto-11563-13-junho-2023-794295-publicacaooriginal-168062-pe.html)

## 29 August 2023 — A court changes the route to approval.

ID: a-court-changes-the-route-to-approval · Documented

A US appeals court rejected the SEC’s explanation for denying Grayscale’s proposed conversion to a spot product. The SEC later cited that decision in its 2024 approvals. Institutions and courts, not just technology, shaped how people could obtain exposure.

### What this changed

An agency must explain its decisions within the law. Judicial review can change the path available to a financial product, even when the underlying technology has not changed.

### How it works

Administrative-law review changes the path toward regulated-market access without endorsing Bitcoin’s merits.

### What the evidence does not prove

The court development preceded the SEC's later approvals. A successful challenge to an explanation was not itself a blanket endorsement of bitcoin, a guarantee of returns or the final approval of every proposed product.

- [SEC — spot Bitcoin ETP approval, 10 Jan 2024](https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023)
- [Official appellate opinion](https://www.govinfo.gov/content/pkg/USCOURTS-caDC-22-01142/pdf/USCOURTS-caDC-22-01142-0.pdf)

## 2023-11-21 — A major exchange pleads guilty.

ID: a-major-exchange-pleads-guilty · Documented

Binance pleaded guilty in a US resolution involving anti-money-laundering, money-transmission and sanctions violations. The case highlighted responsibilities at the business layer. A network’s openness did not exempt a company serving customers from applicable laws.

### What this changed

The company admitted violations involving compliance with US obligations. The resolution concerned how a business operated, not whether every transaction on Bitcoin's network was valid.

### How it works

Exchange access and liquidity depend on institutions that remain subject to law even when the assets they trade settle on open networks.

### What the evidence does not prove

This case should not be merged with FTX's fraud case or the separate 2026 security incident. Different failures call for different questions about responsibility, controls and customer protection.

- [US DOJ — Binance guilty plea, 21 Nov 2023](https://www.justice.gov/archives/opa/pr/binance-and-ceo-plead-guilty-federal-charges-4b-resolution)

## 6 December 2023 — The public ledger does not require plaintext transport.

ID: bip324 · Documented

Bitcoin Core 26 adds support for the version 2 peer-to-peer transport protocol. Opportunistic encryption makes passive identification and reading of node traffic harder.

### How it works

Transport privacy protects some network metadata; it does not hide the public transaction ledger or automatically authenticate peers.

### What the evidence does not prove

The 2023 date identifies implementation support. BIP 324 was assigned in 2019, and adoption across connections is not instantaneous or universal.

### Rollout and limits

Bitcoin Core 26.0 included experimental BIP 324 transport support, disabled by default. Its release did not automatically encrypt every connection across the network.

- [Core 26.0 release notes](https://bitcoincore.org/en/releases/26.0/)
- [BIP 324 specification](https://bips.dev/324/)

## 2023 · inscriptions retrospective — What belongs in a Bitcoin block?

ID: what-belongs-in-a-bitcoin-block · Documented

Ordinals inscriptions used Bitcoin transactions to carry digital content. They reopened a debate about uses of limited block space. The question is both technical and social: who decides which valid uses are worthwhile, and who pays when demand increases?

### What this changed

Limited block space can be used for more than straightforward payments. Inscriptions put digital content into transactions, prompting disagreement about priorities and the costs of competing uses.

### How it works

Existing witness and script capabilities can support uses not anticipated by every participant. Paid block space is scarce even when users disagree about which uses are worthwhile.

### A closer historical detail

The BRC-20 experiment used inscriptions to describe token operations, while software outside Bitcoin consensus interpreted token balances. Bitcoin nodes checking a valid transaction do not thereby endorse those tokens or guarantee that different indexers agree.

### What the evidence does not prove

Valid under the rules and desirable to a particular user are different judgments. Inscriptions are not newly issued bitcoin. Fee conditions also have multiple causes, so one use should not be blamed for every increase.

### About this date

Ordinals inscriptions and the later BRC-20 experiment were separate developments during 2023. This annual overview appears at year-end, not on a claimed launch day for both technologies.

- [Ordinal Theory Handbook — inscriptions](https://docs.ordinals.com/inscriptions.html)
- [Bitcoin Optech — 2023 year in review](https://bitcoinops.org/en/newsletters/2023/12/20/)
- [Contemporary Ordinals debate](https://www.reuters.com/technology/cryptoverse-new-breed-bitcoin-nfts-sell-millions-2023-03-14/)
- [domo · original BRC-20 experiment](https://domo-2.gitbook.io/brc-20-experiment)

## 2024-01-10 — A familiar wrapper arrives.

ID: a-familiar-wrapper-arrives · Documented

The SEC approved US spot bitcoin exchange-traded products. Brokerage customers gained another route to price exposure, with providers and custodians between them and the asset. Approval was not an endorsement of bitcoin or a promise of safety.

### What this changed

A brokerage account can offer exposure through a listed product, while a custodian handles the underlying bitcoin. The buyer owns an interest in the product rather than directly controlling the private keys.

### How it works

An ETP share and direct control of bitcoin are different forms of exposure. Custody, market structure, fees and legal rights sit between the share holder and the underlying asset.

### A closer historical detail

The SEC approved exchange rule changes for 11 spot Bitcoin products on 10 January 2024. Listing approval did not endorse the asset. Customers bought product shares, with fees and custody arrangements, rather than receiving keys to bitcoin.

### What the evidence does not prove

That can simplify access but adds product fees, provider rules and custody arrangements. SEC approval permitted these US products under the relevant framework; it was not a judgment that bitcoin was safe or suitable for everyone.

- [SEC — spot Bitcoin ETP approval, 10 Jan 2024](https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023)
- [SEC · consolidated listing order](https://www.govinfo.gov/content/pkg/FR-2024-01-17/html/2024-00743.htm)

## 2024-04-20 — The fourth halving.

ID: the-fourth-halving · Documented

At block 840,000, the subsidy fell to 3.125 bitcoin. The event renewed questions about miners’ costs and future security funding. The scheduled reduction did not dictate future prices or guarantee that transaction fees would replace subsidy income.

### What this changed

At block 840,000 the subsidy changed from 6.25 to 3.125 bitcoin. Transaction fees remained another source of miner income, while costs depended on equipment, electricity and competition.

### How it works

A block’s coinbase can contain subsidy plus transaction fees. The subsidy reduction should not be confused with a reduction in all miner revenue or a mechanical change in market price.

### What the evidence does not prove

Long-term security funding is an open economic question. A lower subsidy does not establish that fees will replace it, nor does it determine the next market price. The date displayed here uses UTC.

- [Bitcoin.org — halving history](https://bitcoin.org/en/halving)
- [Block 840,000 · fourth halving](https://mempool.space/block/840000)
- [Block 420,000](https://mempool.space/block/420000)
- [Block 630,000](https://mempool.space/block/630000)

## 24 April 2024 — Privacy software becomes a criminal-law battleground.

ID: samourai · Documented

US authorities charge Samourai Wallet’s founders and seize infrastructure, disrupting a Bitcoin privacy service. The case sharpens debate over software, coordination, criminal proceeds and money-transmission obligations.

### How it works

The network can remain operational while particular wallet services, servers and distribution channels are removed.

### What the evidence does not prove

Charges were allegations in April 2024. The later record includes guilty pleas to an unlicensed money-transmission conspiracy and 2025 sentences; neither event establishes that all privacy tools or all CoinJoin use are illegal.

- [DOJ charging announcement](https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering)
- [DOJ later case outcome](https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years)

## 20 May 2024 — An identity claim faces the evidence.

ID: copa-wright · Documented

England’s High Court publishes its reasons for finding that Craig Wright did not write the Bitcoin whitepaper, create the system or operate as Satoshi Nakamoto. The judgment scrutinizes an extensive evidentiary record.

### How it works

A pseudonymous project can attract claims of personal authority and intellectual-property control. Courts can test particular claims without identifying the actual creator.

### What the evidence does not prove

20 May dates the reasoned judgment; the result had been announced orally in March. The ruling does not reveal who Satoshi is.

- [Judiciary judgment record](https://www.judiciary.uk/judgments/copa-v-wright/)

## 5 July 2024 — A decade later, repayment begins.

ID: a-decade-later-repayment-begins · Documented

The Mt. Gox trustee began bitcoin and bitcoin-cash repayments in July. The long interval made the human cost of custody failure visible: lost access, legal procedures and uncertainty. Beginning repayments did not mean every creditor had been paid.

### What this changed

For creditors, the passing years mattered: access to assets was delayed while legal and administrative work continued. Repayment beginning is therefore a human milestone as well as a financial one.

### How it works

A blockchain can preserve assets while legal entitlement, distribution and intermediary procedures take years to resolve.

### What the evidence does not prove

Different creditors can face different steps and timetables. Trustee notices continued to matter after July 2024. This entry records the start of repayments, not a claim that all claims were settled by the review date.

- [Mt. Gox trustee — notices](https://www.mtgox.com/)
- [Trustee’s repayment notice](https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf)

## 19 June–12 July 2024 — Seized bitcoin is sold under legal rules.

ID: seized-bitcoin-is-sold-under-legal-rules · Documented

Saxon authorities sold nearly 50,000 bitcoin connected to criminal proceedings. The proceeds were held for the case. This was a legal asset-disposal process, not simply a national investment manager deciding to time the market.

### What this changed

Assets held in criminal proceedings are governed by legal duties and procedures. A sale under those rules is not equivalent to an investment fund making an ordinary portfolio decision.

### What the evidence does not prove

The proceeds remained connected to the proceedings. This record does not establish that the sale caused a particular market move; proving that would require evidence beyond the timing of a large transaction.

### About this date

The Saxony prosecutor’s announcement on 16 July describes sales from 19 June through 12 July. This interval is placed at its end; the announcement date is not the start of sales.

- [Saxony prosecutor — sale of seized BTC, 16 Jul 2024](https://www.medienservice.sachsen.de/medien/news/1077662)

## 5 December 2024 — Six figures become a public symbol.

ID: hundred-thousand · Documented

Bitcoin trades above US$100,000 and attracts broad mainstream coverage. Like dollar parity in 2011, a round number becomes a cultural marker for an expanding and politically contested market.

### How it works

Nominal dollar prices connect a scarce digital unit to global speculation, institutional narratives and public attention.

### What the evidence does not prove

Markets are fragmented: this is not a single universal price or a claim about an exact first minute at every venue. A milestone says nothing certain about future returns or social usefulness.

- [Reuters contemporary report](https://www.reuters.com/technology/bitcoin-tops-100000-optimism-over-trump-crypto-plans-2024-12-05/)
- [Independent AP coverage](https://apnews.com/article/bitcoin-trump-election-crypto-regulation-c45a747d9c32591bc4e5dcd6e5cc0c22)

## 30 December 2024 — MiCA moves into application.

ID: mica-moves-into-application · Documented

The EU framework became broadly applicable in December 2024, while some existing providers could use national transitional arrangements. Legal protection depended on the service, entity and authorisation status, not just a familiar brand name.

### What this changed

Application made the framework relevant to ongoing service provision, but transitional arrangements could still affect existing businesses. Different national periods meant customers could not infer status from a date alone.

### How it works

Authorization and conduct requirements govern covered businesses across a shared legal framework, with national transitional arrangements.

### What the evidence does not prove

Rules for particular asset categories also had their own phases. The practical questions remained which company served the customer, where it was authorised and what protections applied to that activity.

### About this date

MiCA’s general application began on 30 December. Titles covering asset-referenced and e-money tokens applied from 30 June 2024. Provider transition periods were a further, distinct question.

- [Council of the EU — digital finance](https://www.consilium.europa.eu/en/policies/digital-finance/)
- [ESMA — end of MiCA transition, 17 Apr 2026](https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf)
- [Official MiCA regulation](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)
- [ESMA: MiCA Article 149, application dates](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-149-entry-force-and-application)

## 29 January 2025 — El Salvador changes the terms.

ID: el-salvador-changes-the-terms · Documented

El Salvador approved changes to its Bitcoin law on 29 January 2025, making private acceptance voluntary and changing the tax-payment framework. The IMF later reported that the prohibition on paying taxes in bitcoin took effect on 1 May. Approval and implementation were separate stages.

### What this changed

Making acceptance voluntary changes the position of a private merchant. Requiring taxes in dollars also distinguishes what individuals may choose from what the state requires for a public obligation.

### How it works

The distinction between mandatory acceptance, optional payments and public-sector exposure becomes central to the law’s revision.

### What the evidence does not prove

The reforms qualify the original 2021 story. They are evidence of a policy change, not a complete measurement of compliance, use or public attitudes. Later reporting on Chivo adds another piece rather than replacing this one.

### About this date

The timeline date is legislative approval. The IMF’s later review dates the tax-payment prohibition to 1 May 2025; programme commitments and Chivo’s later changes should not all be treated as completed on 29 January.

- [IMF — El Salvador country report 25/58](https://www.elibrary.imf.org/abstract/journals/002/2025/058/article-A001-en.xml)
- [Contemporary legislative report](https://www.reuters.com/world/americas/lawmakers-el-salvador-rush-new-bitcoin-reform-after-imf-deal-2025-01-30/)
- [IMF program approval and reforms](https://www.imf.org/en/news/articles/2025/02/26/pr25043-el-salvador-imf-approves-new-40-month-us1-bn-eff-arr)
- [IMF: El Salvador 2025 programme review](https://www.elibrary.imf.org/abstract/journals/002/2025/190/article-A001-en.xml)

## 2025-02-21 — Custody risk crosses networks.

ID: bybit-custody · Documented

The FBI attributed the theft of about $1.5 billion in virtual assets from Bybit to North Korean actors. It reported that some stolen assets were converted to bitcoin and other assets.

### Why it matters

An incident at a custodian can spread across trading venues and blockchains. Users depend on signing procedures, operational controls and the ability of intermediaries to respond.

### What the evidence does not prove

This was not a failure of Bitcoin’s consensus rules. The stolen value was not simply a bitcoin balance, and attribution should remain tied to the dated FBI statement.

### About this date

The theft occurred on 21 February. The FBI published its attribution on 26 February 2025. The stolen assets were on Ethereum; this was a custody incident, not a failure of Bitcoin consensus.

- [FBI · 26 February 2025 attribution](https://www.ic3.gov/PSA/2025/PSA250226)

## 2025-03-06 — A government creates a reserve policy.

ID: a-government-creates-a-reserve-policy · Documented

A US executive order established a Strategic Bitcoin Reserve intended initially to use finally forfeited government holdings. It also directed work on budget-neutral acquisition strategies. A policy authorisation is different from proof that new purchases actually occurred.

### What this changed

A reserve policy defines how a government intends to hold particular assets. The order initially pointed to finally forfeited bitcoin, while directing work on budget-neutral strategies for possible additional acquisition.

### How it works

Assets accumulated through enforcement are assigned a different policy role. The order also directs work on budget-neutral acquisition strategies.

### What the evidence does not prove

Authorisation, an announced strategy and a completed purchase are different facts. This entry does not infer new purchases or holdings totals from the executive order, and it does not adopt the order's political claims as neutral evidence.

- [US executive order — Strategic Bitcoin Reserve, 6 Mar 2025](https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/)
- [Independent contemporary account](https://www.bloomberg.com/news/articles/2025-03-06/crypto-execs-head-to-white-house-amid-questions-around-us-bitcoin-reserve)

## 2025-04-28 — The electricity bill becomes measurable.

ID: the-electricity-bill-becomes-measurable · Documented

Cambridge’s mining report estimated annual electricity use at 138 TWh. Its survey also examined energy sources and industrial conditions. The figures depend on coverage and methods; a cleaner energy mix does not automatically mean less total electricity use.

### What this changed

Electricity demand is a physical part of a digital service. Cambridge estimated annual network use at 138 TWh in its 2025 report, using a model and industry evidence rather than a meter attached to the entire network.

### How it works

Its sample covers roughly 48% of network hashrate at collection. The report estimates annual electricity use near 138 TWh and discusses an energy mix that includes renewables, nuclear power and fossil fuels.

### What the evidence does not prove

Energy mix, electricity consumption and emissions answer different questions. Nuclear energy is not renewable; cleaner supply does not necessarily mean lower demand. This is a dated research estimate, not a live November 2026 reading.

- [Cambridge — Digital Mining Industry Report 2025](https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/cambridge-digital-mining-industry-report/)
- [Official dated publication announcement](https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/)
- [Independent reporting and sample caveat](https://forklog.com/en/ccaf-finds-bitcoin-miners-increasingly-using-cleaner-energy/)

## 29 July 2025 — The fund’s plumbing changes.

ID: in-kind-etps · Documented

The SEC permits in-kind creation and redemption for covered Bitcoin and Ether ETPs. Authorized participants can exchange underlying assets for shares rather than relying only on cash-based processes.

### How it works

The change concerns institutional fund mechanics, potentially altering operational costs and flows between custodians, markets and funds.

### What the evidence does not prove

It is not a promise that ordinary shareholders can redeem every share for bitcoin, a new Bitcoin consensus rule, or a general investment endorsement.

- [SEC approval announcement](https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps)
- [Independent contemporary account](https://www.reuters.com/technology/us-securities-regulator-allows-in-kind-crypto-etf-redemptions-2025-07-29/)

## 2025-10-10 — The debate over data continues.

ID: the-debate-over-data-continues · Documented

Bitcoin Core 30.0 changed default handling of data-carrying transactions. The change belongs in the continuing discussion about what node software relays and miners include. These defaults are not the same thing as changing the maximum supply or the rules for valid blocks.

### What this changed

A node can choose which transactions to relay or keep waiting locally. Those policies are not identical to the consensus rules that decide whether a block is valid.

### How it works

Policy decides what a node normally relays or includes in its own templates; consensus decides which blocks it accepts as valid. These layers are related but not interchangeable.

### What the evidence does not prove

Core 30.0's default-policy changes continued the argument about data use. Installing software does not by itself give a developer control over every node. The monetary supply limit was not changed by these defaults.

- [Bitcoin Core — 30.0 release notes](https://bitcoincore.org/en/releases/30.0/)
- [Bitcoin Core — software lifecycle](https://bitcoincore.org/en/lifecycle/)
- [Independent technical release review](https://bitcoinops.org/en/newsletters/2025/10/17/)

## 2026-01-01 — Tax reporting gathers more information.

ID: tax-reporting-gathers-more-information · Documented

DAC8 rules began applying to reportable crypto-asset activity in the EU. Providers started collecting information for the 2026 reporting year, with the first cross-border exchanges due in 2027. Collection and reporting are different milestones.

### What this changed

Reporting rules make information about covered activity available to tax authorities. Collection begins before authorities exchange the resulting reports across borders.

### What the evidence does not prove

For DAC8, 2026 collection and the first 2027 exchanges are different milestones. The rules do not create one common EU tax rate or establish that every movement between wallets is taxable. Tax reporting and tax liability are different questions.

- [European Commission — DAC8](https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en)

## 5 January 2026 — Migration can be as dangerous as storage.

ID: wallet-migration-bug · Documented

Bitcoin Core warns that a rare failure during legacy-wallet migration in versions 30.0 and 30.1 can delete unrelated files in the wallet directory. Affected binaries are removed from official distribution pending a fix.

### How it works

A wallet’s keys and backups depend on filesystem and migration code as well as cryptographic primitives. Software-maintenance work can create custody risk.

### What the evidence does not prove

The advisory concerns specific migration conditions, not every wallet, ordinary transaction processing or Bitcoin’s consensus rules. It records the January warning, not an assertion that the problem remained unfixed in November.

### What happened next

Bitcoin Core 30.2 subsequently documented fixes for the legacy-wallet migration failure and related directory-deletion problem. The warning describes specific conditions in affected versions, not a failure of Bitcoin transaction validation or evidence that every wallet was affected.

- [Core advisory](https://bitcoincore.org/en/2026/01/05/wallet-migration-bug/)
- [Independent contemporary account](https://thebitcoinmanual.com/articles/bitcoin-core-rollback/)
- [Bitcoin Core 30.2 — documented migration fixes](https://bitcoincore.org/en/releases/30.2/)

## 2 February 2026 — Brazil's framework reaches supervision.

ID: brazil-s-framework-reaches-supervision · Documented

Brazil’s Central Bank identifies Resolution 520 of 2025 as governing virtual-asset service providers and confirms its authorisation and supervisory role. This is a follow-up to the 2022 law, showing the distance between legislation and operational rules.

### What this changed

Operational rules turn a broad legislative framework into expectations for providers and supervisors. The Central Bank's FAQ links that work to Resolution 520 of 2025 and its authorisation role.

### How it works

Bitcoin trading and custody businesses face institutional requirements beyond the mere existence of an open payment protocol.

### What the evidence does not prove

The rules entered into force in February 2026, but transitional processes and later amendments still matter. That date does not establish that every provider had completed authorisation.

### From issuance to application

Brazil’s Central Bank issues rules on authorization, operation and relevant foreign-exchange aspects of virtual-asset services. The framework’s entry into force on 2 February 2026 takes the 2022 statute into a more concrete supervisory phase.

- [BCB — virtual-asset FAQ, updated Feb 2026](https://www.bcb.gov.br/meubc/faqs/s/moedas-virtuais)
- [Central Bank official presentation](https://www.bcb.gov.br/conteudo/home-ptbr/TextosApresentacoes/Picchetti_IBRE_FGV_6.4.26.pdf)
- [Contemporary issuance reporting](https://www.reuters.com/world/americas/brazil-central-bank-tightens-rules-virtual-assets-cryptocurrency-2025-11-10/)
- [Resolution 520 official record](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=520&tipo=Resolu%C3%A7%C3%A3o+BCB)
- [BCB Resolution 520: Article 92, entry into force](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=520&tipo=Resolu%C3%A7%C3%A3o+BCB)

## 2026-03-09 — Most issuance is already behind us.

ID: twenty-million · Documented

The block-subsidy schedule reached approximately 20 million bitcoin in March 2026. The remaining issuance is spread over increasingly small rewards.

### Why it matters

The schedule is front-loaded: the first decades account for most potential issuance. This helps explain why the last fraction takes so much longer than the first millions.

### What the evidence does not prove

Scheduled issuance is not the same as spendable or circulating supply. Unclaimed rewards, unspendable outputs and lost keys prevent a single total from describing what people can actually use.

- [Block 939,999 · on-chain record](https://mempool.space/block/939999)

## 17 March 2026 — Agencies explain their reading of the law.

ID: sec-interpretation-2026 · Documented

The SEC issues an interpretation on federal securities laws and crypto assets, joined by related CFTC guidance. The document discusses asset categories and transactions, including distinctions relevant to Bitcoin and proof-of-work mining.

### How it works

An asset’s characteristics and the contract through which it is offered can produce different legal questions. Agency interpretation changes regulatory guidance, not Bitcoin’s validation rules.

### What the evidence does not prove

17 March is issuance; the document specifies 23 March effectiveness. This is not a newly enacted congressional market-structure statute, a replacement for binding court precedent, or immunity for every Bitcoin-related investment contract.

### About this date

The conformed SEC/CFTC interpretation states “Effective Date: March 23, 2026” on page 1. This entry remains anchored to issuance on 17 March.

- [SEC announcement](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets)
- [Interpretation text](https://www.sec.gov/files/rules/interp/2026/33-11412.pdf)
- [Independent contemporary account](https://www.reuters.com/world/us-securities-regulator-issues-long-awaited-crypto-guidance-2026-03-17/)
- [SEC/CFTC interpretation: effective-date provision, page 1](https://www.sec.gov/files/rules/interp/2026/33-11412.pdf)

## 2026-04-19 — Maintenance continues behind the scenes.

ID: maintenance-continues-behind-the-scenes · Documented

Bitcoin Core 31.0 introduced a redesigned way to manage groups of pending transactions, alongside fixes and other changes. The story is about maintaining a system people rely on. A software release is not, by itself, a change to Bitcoin’s monetary rules.

### What this changed

The mempool is a node's waiting area for transactions that have not yet been confirmed. Managing related transactions together can matter because one may depend on another.

### What the evidence does not prove

Core 31.0 changed that management through cluster mempool work alongside other improvements. This records a documented release, not a claim that 31.0 is the newest version at the review date or that monetary rules changed.

- [Bitcoin Core — 31.0 release notes](https://bitcoincore.org/en/releases/31.0/)
- [Bitcoin Core — software lifecycle](https://bitcoincore.org/en/lifecycle/)

## 2026-07-01 — Europe's longest transition ends.

ID: europe-s-longest-transition-ends · Documented

The latest EU-wide deadline for MiCA transitional arrangements arrived. ESMA explained the expectations for authorisation and orderly exits. The practical issue for users was which legal entity held their assets and what would happen if a provider could not continue.

### What this changed

Transition periods allowed some existing providers time to move into the new framework. ESMA's deadline was the latest end point; some countries had already ended their arrangements earlier.

### How it works

A common deadline brings authorization status, client communication and orderly transfer of assets into focus for Bitcoin service users.

### What the evidence does not prove

Customers needed to understand whether their provider could continue and how an orderly exit would work. Authorisation brings obligations and oversight, but does not guarantee that an asset keeps its value or that losses become impossible.

- [ESMA — end of MiCA transition, 17 Apr 2026](https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf)
- [MiCA Article 143](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-143-transitional-measures)
- [ESMA 2026 public statement](https://www.esma.europa.eu/sites/default/files/2026-06/ESMA75-113276571-1710_Public_Statement_MiCA_transitional_period_ends.pdf)

## 9 August 2026 — A proposal fails to become a shared rule.

ID: bip110-split · Documented

BIP 110 proposed temporary restrictions on certain data in Bitcoin blocks. Its own change log records that it was closed on 9 August 2026 following a chain split and stalled mining. The proposal did not become the shared rules of Bitcoin’s dominant chain.

### Why agreement matters

A proposal can describe precise rules without persuading the wider network to adopt them. Participants choose software independently, while miners and services also affect which history remains useful to others. A split exposes the distance between proposing a rule and building agreement around it.

### What the evidence does not prove

The proposal record documents closure after a split. It does not establish that its restrictions activated on Bitcoin’s dominant chain. Early block counts are snapshots, not final totals. The proposal’s arguments about which uses Bitcoin should prioritise are its authors’ position, not neutral findings.

### About this date

The BIP change log records closure on 9 August following a split and stalled mining. That is a document-status date, not a measurement of the precise moment a chain split began.

- [BIP 110 specification and status record](https://bips.dev/110/)

## 15 September 2026 — A procedural hurdle is not a final statute.

ID: clarity-cloture · Documented

An attempt to advance the Digital Asset Market Clarity Act in the US Senate fails at a procedural vote. The vote concerned whether to move forward with considering the bill, not whether its entire contents should become law.

### How it works

Trading businesses can be affected by uncertainty about which agency oversees their activities. Legislative proposals still have to pass procedural steps and political negotiation. An agency publishing guidance and Congress passing a statute are different developments.

### What the evidence does not prove

This was not enactment or a final vote rejecting every provision of the bill. Contemporary reports and the final official tally differ after a procedural vote switch; the project does not turn the initial count into the definitive result.

- [Senate daily record](https://www.dailypress.senate.gov/tuesday-september-15-2026/)
- [Senate cloture table](https://www.senate.gov/legislative/cloture/119.htm)
- [Independent contemporary reporting](https://www.cnbc.com/2026/09/15/senate-cloture-vote-on-clarity-act-fails-dealing-regulatory-setback-to-crypto-industry.html)

## 2026-10-01 — The national experiment keeps changing.

ID: the-national-experiment-keeps-changing · Documented

The IMF reported that majority ownership and control of Chivo had moved to a private operator, while remaining public exposure still needed attention. The follow-up shows why adoption stories need updates: ownership, obligations and actual use can change after launch.

### What this changed

Who owns and controls a wallet service affects governance and public exposure. The IMF's update reported a transfer of majority ownership and control, while noting that remaining public exposure still needed to be unwound.

### What the evidence does not prove

This is a report about institutional arrangements, not a new survey of residents' payment habits. It does not establish that all state involvement ended. The source and date stay attached because this national experiment continues to evolve.

### About this date

1 October is the IMF report’s publication date. It is not asserted as the exact day of an ownership transfer involving Chivo.

- [IMF — combined reviews, 1 Oct 2026](https://www.imf.org/en/news/articles/2026/10/01/pr26316-el-salvador-imf-concludes-2nd-and-3rd-reviews-under-the-eff)

## 27 October 2026 — A release records a decision to wait.

ID: core32-1 · Documented

Bitcoin Core 32.1 is published after version 32.0 is marked in the code repository but not fully released because of late problems. The new release includes fixes and changes to fee estimates and wallet tools.

### How it works

Preparing software involves more than assigning a version number. A marked point in the code, a version offered for testing and a fully announced release have different meanings. Choosing to delay a release is part of maintaining software that people rely on.

### What the evidence does not prove

This entry records a documented release before the 8 November 2026 cutoff. Publication does not mean that every user installed it or that Bitcoin’s shared monetary rules changed. Version numbers should not be confused with network-wide activation.

- [Official release notes](https://bitcoincore.org/en/releases/32.1/)
- [Independent technical release review](https://bitcoinops.org/en/newsletters/2026/10/30/)

## 2026-10-29 / 11-03 — Custody risk returns to the headlines.

ID: custody-risk-returns-to-the-headlines · Developing

Binance reported a major security breach, and the FBI attributed the theft to North Korean actors. The exchange described losses across several assets, including bitcoin, and said it would cover them. Investigation and independent review were still ongoing at the cutoff.

### What this changed

The exchange described a breach affecting several assets, including bitcoin. The FBI separately attributed the theft to North Korean actors. Those are different sources making different claims about the same developing incident.

### What the evidence does not prove

The company's statement that it would cover losses is not an independent audit or proof that every customer has been made whole. This entry is provisional as of 8 November 2026. It concerns custody systems, not a demonstrated failure of Bitcoin consensus.

### About this date

The incident was reported for 29 October, the FBI attribution for 31 October and Binance’s update for 3 November. This developing account retains an 8 November information cutoff. A promise to cover losses is not proof that every customer has been repaid.

- [Binance — initial incident report, 3 Nov 2026](https://www.binance.com/en/blog/community/3229153443759566763)
- [FBI — 31 Oct 2026 attribution notice](https://www.fbi.gov/investigate/cyber/alerts/2026/north-korea-responsible-for-6-billion-binance-attack)
- [Reuters — incident reporting, 3 Nov 2026](https://www.reuters.com/world/binance-says-hackers-used-fake-job-interview-compromise-computer-before-63-2026-11-03/)

# Conditional future milestones (2)

## Expected around 2028 — The next step is written in blocks.

ID: fifth-halving · Conditional projection

Under current consensus rules; calendar timing is estimated.

Under current rules, block 1,050,000 reduces the subsidy from 3.125 to 1.5625 BTC. The year is an estimate, not an appointment.

### Why it matters

The reduction changes newly issued bitcoin, not existing balances. Miners also receive transaction fees, while their costs depend on equipment, electricity and competition.

### What the evidence does not prove

The rule does not guarantee a price increase or a particular security outcome. This is a projection under current consensus rules, not a promise about future adoption or calendar timing.

- [Bitcoin Core · subsidy calculation](https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp)

## Estimated around 2140 — When new issuance ends.

ID: issuance-ends · Conditional projection

Under current consensus rules; calendar timing is estimated.

Under current rules, the last positive block subsidy is at height 6,929,999. From block 6,930,000, the subsidy is zero; blocks can still carry transactions.

### Why it matters

Transaction fees could continue to compensate miners. Whether fees support enough security is an economic question, not a guarantee hidden in the issuance formula.

### What the evidence does not prove

Around 2140 is a calendar estimate. The theoretical subsidy sum is slightly below 21 million BTC and is not the spendable supply. This does not predict that the network stops or that its future rules cannot be debated.

- [Bitcoin Core · subsidy calculation](https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp)

# Undated proposals (6)

## No activation date — Spending can follow a template.

ID: ctv · Proposal — not an activation

No activation date. Proposal status is not network adoption.

CTV proposes letting an output commit to a template for a later spending transaction.

### How the idea works

Today, a spending condition can ask for a valid signature. This proposal would add a way to check whether parts of the next transaction match a previously chosen template. Think of preparing a route for funds before they move. That can help a wallet designer build safeguards, but a route fixed in advance can also be inconvenient when circumstances change.

### Why it matters

It could support designs for vaults or coordinating future transactions, with trade-offs in flexibility and implementation.

### What the evidence does not prove

A draft, an activation client or miner signalling does not establish adoption by the network.

- [BIP 119 · current specification](https://bips.dev/119/)

## No activation date — A signature could check supplied data.

ID: csfs · Proposal — not an activation

No activation date. Proposal status is not network adoption.

CHECKSIGFROMSTACK proposes checking a signature against a message supplied to a script.

### Why checking a message is different

Bitcoin normally checks signatures as part of authorising a transaction. This proposal would let a script check a signature against supplied data. The distinction matters to people building more elaborate spending rules: a signature could support another condition inside a larger design. The operation alone does not tell the network whether an outside statement is true.

### Why it matters

The operation could be combined with other designs to express additional spending conditions. Its usefulness depends on the surrounding construction.

### What the evidence does not prove

A possible application is not a deployed product or an activated consensus rule.

- [BIP 348 · current specification](https://bips.dev/348/)

## No activation date — Two pieces of data could become one.

ID: opcat · Proposal — not an activation

No activation date. Proposal status is not network adoption.

OP_CAT proposes joining two values inside a script. The specification is marked complete in the reviewed record.

### A small tool with a wider debate

Joining two pieces of data sounds ordinary. In a spending script, however, a small building block can make other constructions possible. That is why the discussion is about more than one short instruction. Developers must examine combinations, resource limits and failure cases. For most people, any practical benefit would arrive through wallets or services built on top, not through using the instruction directly.

### Why it matters

A small operation can support more complex constructions. Review must consider the resulting capabilities as well as the simplicity of the operation itself.

### What the evidence does not prove

Complete describes the specification, not mainnet activation or community agreement.

- [BIP 347 · current specification](https://bips.dev/347/)

## No activation date — A channel update could be easier to reuse.

ID: anyprevout · Proposal — not an activation

No activation date. Proposal status is not network adoption.

ANYPREVOUT proposes signatures that do not commit to the exact previous output being spent.

### What this could change for payments

An ordinary transaction points to particular earlier outputs. The proposed signature rules relax part of that connection, so a suitable update can work with compatible outputs in a larger construction. This is relevant to research on payment channels and replacing older states. Wallet software, channel design and careful deployment would still be needed. A proposal in the repository does not change the channels people use today.

### Why it matters

Compatible transactions could be rebound in designs for off-chain payment updates, changing how participants manage their state.

### What the evidence does not prove

This is a draft proposal. It does not make an existing Lightning channel automatically use a new update mechanism.

- [BIP 118 · current specification](https://bips.dev/118/)

## No activation date — Maintenance can reach the rules themselves.

ID: consensus-cleanup · Proposal — not an activation

No activation date. Proposal status is not network adoption.

Consensus Cleanup proposes a group of changes addressing long-standing edge cases. The reviewed specification is marked complete.

### Why maintenance is a social question too

A network must check transactions and blocks consistently. Unusual cases can make that work harder or expose weaknesses in rules. The proposal groups several repairs, rather than offering a new consumer feature. Even maintenance requires review and coordination: independent users have to decide which software and rules to accept. Calling a change a cleanup does not remove the need to examine its consequences.

### Why it matters

The proposal targets timewarp, costly validation and other weaknesses. Rules that appear invisible to most users can matter to the resilience of the shared system.

### What the evidence does not prove

A completed specification is not an activated soft fork. There is no activation date stated here.

- [BIP 54 · current specification](https://bips.dev/54/)

## No activation date — Preparing for a different kind of attack.

ID: p2mr · Proposal — not an activation

No activation date. Proposal status is not network adoption.

Pay-to-Merkle-Root proposes a new output type similar to Taproot, with the key-spending path removed.

### Protection has more than one layer

Taproot offers a key-spending route and a script-spending route. This proposal removes the direct key route and commits to a tree of scripts instead. Reducing one kind of key exposure can be useful without solving every cryptographic risk. Signatures, old outputs, wallet migration and the way funds are eventually spent remain part of the wider problem. There is no reliable calendar date for an attack implied by this proposal.

### Why it matters

The draft addresses some risks from prolonged exposure of public keys. It is part of a wider discussion about cryptography and migration.

### What the evidence does not prove

It is not complete quantum protection and does not establish a date when quantum attacks become practical. The proposal remains distinct from an activated network rule.

- [BIP 360 · current specification](https://bips.dev/360/)

