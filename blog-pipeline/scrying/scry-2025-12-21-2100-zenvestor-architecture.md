---
type: scrying
mode: archaeological
target: ~/src/zenvestor
target_project: /home/pentaxis/src/zenvestor
date: 2025-12-21
time: "21:00"
intention: Show me the architectural skeleton. What patterns reveal AI-first development?
lens:
  - cycle_1: architectural bones, dependency directions, test structure, ADR decisions
  - cycle_2: application layer patterns, concrete code examples, validation flow
---

# Scrying: Zenvestor Architecture

## Intention

> "Show me the architectural skeleton. What patterns reveal AI-first development? Let the structures that serve human-AI collaboration emerge."

---

# CYCLE 1: The Skeleton

## Perceptions (Scryer)

### Entry Points

Three primary entry points perceived:

1. **Server Entry**: `/home/pentaxis/src/zenvestor/zenvestor_server/bin/main.dart`
2. **Flutter Entry**: `/home/pentaxis/src/zenvestor/zenvestor_flutter/lib/main.dart`
3. **Domain Package**: `/home/pentaxis/src/zenvestor/packages/zenvestor_domain/`

### Architectural Bones

**Three-Kingdom Structure:**
```
Domain (Pure Logic)
    ↓ defines interfaces
Repository Contracts (Promises)
    ↑ implemented by
Infrastructure (Reality)
```

Domain entities are **composed, not inherited** in server layer:

```dart
// Server entity wraps shared domain entity
class Stock {
  final UuidValue id;              // Infrastructure concern
  final domain.Stock sharedStock;  // Domain logic
  final DateTime createdAt;        // Infrastructure concern
}
```

### The Functional Spine

**Either Monad Throughout (ADR-0007):**

```dart
static Either<WatchlistNameError, WatchlistName> create(String input) {
  if (normalized.isEmpty) return Left(WatchlistNameEmpty(input));
  if (normalized.length > maxLength) return Left(WatchlistNameTooLong(...));
  if (!_validPattern.hasMatch(...)) return Left(WatchlistNameInvalidCharacters(...));
  return Right(WatchlistName._(normalized));
}
```

Exceptions only thrown at endpoint boundary. Domain/application layers are exception-free.

**Immutable Collections Standard (ADR-0024):**
- `fast_immutable_collections` library
- IList/ISet/IMap for entity fields
- `.lock` conversion at boundaries

### The Test-Driven Foundation

- 100% coverage mandate enforced by CI (ADR-0005)
- Three test types: Unit (mocks), Integration (real DB), Widget (UI)
- Serverpod-native testing with automatic transaction rollback (ADR-0017)
- Centralized fixtures - three-tier architecture mirroring packages (ADR-0014)

### Patterns Crystallized

- **CRUD Reference Implementation** (ADR-0013) - 40KB canonical patterns
- **Dual Identifier Strategy** (ADR-0019/0020) - business IDs for reads, UUIDs for mutations
- **Real-Time Domain Validation** (ADR-0028) - five-layer validation pattern
- **"ASK the domain, don't TELL it"** principle

### The AI-First Framework

- **CLAUDE.md** (368 lines) - primary AI instructions
- **30+ ADRs** - architectural decision records
- **docs/llms/** - AI-optimized quick references
- **Private journal system** (MCP-based) - AI memory across sessions
- **Meta-learning loop**: Debug → Discover → Document → Deploy

### Dependency Directions

```
┌─────────────────────────────────────────┐
│  Presentation (Flutter)                 │
│  └─ depends on ↓                        │
├─────────────────────────────────────────┤
│  Application (Use Cases)                │
│  └─ depends on ↓                        │
├─────────────────────────────────────────┤
│  Domain (Pure Logic)                    │
│  └─ defines ↓                           │
├─────────────────────────────────────────┤
│  Repository Interfaces (Contracts)      │
│  └─ implemented by ↑                    │
├─────────────────────────────────────────┤
│  Infrastructure (Reality)               │
└─────────────────────────────────────────┘
```

Domain NEVER imports infrastructure. Dependency inversion strictly enforced.

### AI-First Patterns Identified

1. **Extreme Explicitness** - no implicit behavior
2. **Reference-Driven Development** - learn by example
3. **Constraint as Liberation** - rigid rules, predictable space
4. **Self-Documenting Architecture** - structure mirrors docs
5. **Meta-Learning Integration** - persistent memory
6. **Layered Documentation Depth** - progressive disclosure
7. **Testing as Truth** - tests as canonical specification

## Structured Observations (Recorder - Cycle 1)

### Architectural Boundaries & Flow
- Three-kingdom structure enforced: Domain → Repository Contracts → Infrastructure
- Clean Architecture layers with strict separation (ADR-0003)
- Dependency inversion rigorously maintained
- Server entities compose domain entities via wrapping, not inheritance (ADR-0025)

### Error Handling & Control Flow
- Either monad pervasive (ADR-0007)
- Exception-free domain and application layers
- Exceptions thrown ONLY at endpoint boundary
- Business errors modeled as Left values, never exceptions

### Immutability & Data Structures
- Immutable collections as standard (ADR-0024)
- Entity fields use immutable types
- `.lock` conversion happens at architectural boundaries

### Testing Architecture
- 100% coverage mandate, CI-enforced
- Three distinct test types
- Centralized fixture system mirroring package structure
- Tests serve as canonical behavioral specification

### Unexamined Territories (Cycle 1)
- Application layer specifics
- Flutter client architecture details
- Failure taxonomy
- Widget testing patterns
- Performance/scalability concerns
- Error recovery patterns

### Where The Mirror Darkened (Cycle 1)
- The "five-layer validation pattern" - named but not described
- The 40KB CRUD Reference Implementation - content not examined
- "ASK the domain, don't TELL it" - mechanism unclear
- Private journal system mechanics
- Either→Exception transition at boundary

### Tensions Noted (Cycle 1)
- Shared domain package vs platform isolation
- 100% coverage vs integration test reality
- Exception-free domain vs endpoint exceptions
- AI-first framework vs 150K lines (scale)
- Reference-Driven vs 30+ evolving ADRs
- Watchlist maturity vs Auth fundamentality

## What Surfaced in Dreaming (Cycle 1)

- **What surfaced:** The three-kingdom structure isn't just architecture, it's a **teaching device**. Domain → Repository Contracts → Infrastructure maps directly to "what vs how vs where."

- **This rhymes with:** The blog's meta-recursive nature. Both projects are *becoming what they document*.

- **Hiding in plain sight:** The 368-line CLAUDE.md isn't documentation - it's a **constraint propagation system**. Each constraint forces discovery of deeper patterns.

- **What wants attention:** "ASK the domain, don't TELL it" - this is Tell, Don't Ask *inverted*. Standard OOP says "tell objects what to do." In a beginner-teaching context, you flip it.

- **The tension between 100% coverage and integration tests suggests:** There's a hidden curriculum in the *failure modes*. The constraint creates the learning opportunity.

- **What surfaced:** The dual identifier strategy (business IDs for reads, UUIDs for mutations) is teaching **CQRS without naming it**.

- **This rhymes with:** "Consciousness themes: breadcrumbs not sermons." The blog veils philosophy. Zenvestor veils advanced architecture patterns.

- **Hiding in plain sight:** Server entities **wrap** domain entities. Not extend, not implement - wrap. The boundary is *visible in the type system*.

- **The tension between shared domain and platform isolation suggests:** The domain is the **contract** between server and client. Not shared library that creates coupling - published interface that enforces decoupling.

- **What surfaced:** "Tests as canonical behavioral specification" - tests are **executable documentation**. The AI reads tests to understand behavior.

- **Hiding in plain sight:** Centralized fixtures mirroring package structure means test setup *looks exactly like* production code organization. You can't learn one without the other.

- **Hiding in plain sight:** The scope creep from "stock trading platform" to "AI-first development framework teaching Clean Architecture through constraint-based pedagogy." **Zenvestor isn't a stock trading app anymore. It's a training environment that happens to trade stocks.**

- **What surfaced:** The self-referential meta-loop might never terminate. But termination isn't the goal. **Ongoing practice is the goal.**

- **Hiding in plain sight:** The entire thing is **executable philosophy**. Clean Architecture is ontology made code. TDD is epistemology made process. Either monad is ethics made types.

---

# CYCLE 2: The Flesh

## Perceptions (Scryer - Cycle 2)

### 1. Value Object Creation

**TickerSymbol** (`packages/zenvestor_domain/lib/src/stock/value_objects/ticker_symbol.dart`):

```dart
static Either<TickerSymbolError, TickerSymbol> create(String input) {
  return _validate(input).fold(
    () {
      final normalized = input.trim().toUpperCase();
      return Right(TickerSymbol._(normalized));
    },
    Left.new,
  );
}

static Option<TickerSymbolError> _validate(String input) {
  final trimmed = input.trim();

  if (trimmed.isEmpty) {
    return Some(TickerSymbolEmpty(input));
  }

  final normalized = trimmed.toUpperCase();

  if (!_validPattern.hasMatch(normalized)) {
    return Some(TickerSymbolInvalidFormat(input));
  }

  if (normalized.length > maxLength) {
    return Some(TickerSymbolTooLong(normalized.length));
  }

  return const None();
}
```

Private constructor prevents invalid construction. The `create()` factory is the ONLY entry point.

### 2. Use Case Composition

**Server-side AddStockUseCase** (`zenvestor_server/lib/src/features/stock/application/use_cases/add_stock_use_case.dart`):

```dart
Future<Either<StockApplicationError, AddStockResponse>> execute(
  Session session,
  AddStockRequest request,
) async {
  // Step 1: Validate ticker symbol value object
  final tickerResult = domain.TickerSymbol.create(request.tickerSymbol);

  if (tickerResult.isLeft()) {
    final error = tickerResult.getLeft().toNullable()!;
    return _errorMapper.mapTickerError(error);
  }

  final tickerSymbol = tickerResult.toNullable()!;

  // Step 2: Check existence
  final existsResult = await _repository.existsByTicker(userId, tickerSymbol);

  if (existsResult.isLeft()) {
    final error = existsResult.getLeft().toNullable()!;
    return switch (error) {
      StockExistsCheckStorageError() => left(
        StockStorageApplicationError(error.message),
      ),
    };
  }

  // Step 3: Create pure domain entity
  final stock = domain.Stock.create(tickerSymbol: tickerSymbol);

  // Step 4: Persist
  final addResult = await _repository.add(userId, stock);

  // ... error handling with switch expressions

  return right(AddStockResponse(stock: savedStock));
}
```

4-step sequence: validate → check exists → create entity → persist. All Either-based, no exceptions.

### 3. Endpoint Boundary - Either Becomes Exception

**StockEndpoint** (`zenvestor_server/lib/src/features/stock/stock_endpoint.dart`):

```dart
Future<AddStockResponse> addStock(
  Session session,
  AddStockRequest request,
) async {
  final result = await useCase.execute(session, appRequest);

  return result.fold(
    _handleAddError,        // Left → throw exception
    _convertToProtocolResponse,
  );
}

Never _handleAddError(StockApplicationError error) {
  switch (error) {
    case AuthenticationApplicationError():
      throw StockServiceException(message: 'Authentication required');
    case StockValidationApplicationError():
      throw StockValidationException(
        message: error.message,
        fieldName: error.fieldName ?? 'tickerSymbol',
        validationType: error.validationType,
      );
    case StockAlreadyExistsApplicationError():
      throw StockDuplicateException(
        tickerSymbol: error.tickerSymbol,
        message: 'Stock with ticker ${error.tickerSymbol} already exists',
      );
    // ...
  }
}
```

`fold()` with `Never` return type. Switch expression ensures exhaustive error handling.

### 4. Repository Implementation

**Flutter StockRepository** (`zenvestor_flutter/lib/src/features/stock/infrastructure/repositories/stock_repository.dart`):

```dart
@override
Future<Either<StockError, domain.Stock>> addStock(domain.Stock stock) async {
  try {
    final request = stock.toAddStockRequest();
    final response = await _client.stock.addStock(request);
    final domainStockResult = response.toDomainStock();

    if (domainStockResult.isRight()) {
      _publishEvent(domain.StockAdded(/*...*/));
    }

    return domainStockResult;

  } on Exception catch (e) {
    return _handleCommonExceptions(e);
  }
}
```

Try-catch IS the translation point from exception-world to Either-world.

### 5. BLoC Pattern

**AddStockBloc** (`zenvestor_flutter/lib/src/features/stock/presentation/blocs/add_stock/add_stock_bloc.dart`):

```dart
Future<void> _onSubmitted(
  AddStockSubmitted event,
  Emitter<AddStockState> emit,
) async {
  emit(state.copyWith(status: AddStockStatus.submitting));

  final result = await _addStockUseCase.execute(trimmedTicker);

  result.fold(
    (error) {
      emit(state.copyWith(
        status: AddStockStatus.failure,
        submissionError: Some(error),
      ));
    },
    (stock) {
      emit(const AddStockState(
        status: AddStockStatus.success,
        tickerSymbol: '',
        validationError: None(),
        submissionError: None(),
      ));
    },
  );
}
```

`fold()` to branch on Either. `Option<Error>` for explicit null handling.

**Real-time validation:**

```dart
Future<void> _onTickerChanged(
  AddStockTickerChanged event,
  Emitter<AddStockState> emit,
) async {
  final validationResult = _validateTickerSymbolUseCase.execute(event.tickerSymbol);

  emit(state.copyWith(
    tickerSymbol: event.tickerSymbol,
    validationError: validationResult.fold(
      Some.new,              // Left(error) → Some(error)
      (_) => const None(),   // Right(value) → None()
    ),
  ));
}
```

### 6. Five-Layer Validation Flow (ADR-0028)

**Layer 1 - Domain Value Object:**
```dart
// TickerSymbol.create() - source of truth
```

**Layer 2 - Validation Use Case:**
```dart
@injectable
class ValidateTickerSymbolUseCase {
  Either<domain.TickerSymbolError, String> execute(String tickerSymbol) {
    final result = domain.TickerSymbol.create(tickerSymbol);
    return result.fold(
      (error) => left(error),
      (tickerSymbolObj) => right(tickerSymbolObj.value),
    );
  }
}
```

**Layer 3 - BLoC State:**
```dart
// Option<StockError> validationError in state
```

**Layer 4 - Error Extensions:**
```dart
extension TickerSymbolErrorMessage on domain.TickerSymbolError {
  String toUserMessage() {
    return switch (this) {
      domain.TickerSymbolEmpty() => 'Stock symbol is required',
      domain.TickerSymbolTooLong(:final actualLength) =>
        'Stock symbol must be at most ${domain.TickerSymbol.maxLength} characters (was $actualLength)',
      domain.TickerSymbolInvalidFormat() => 'Stock symbol must contain only letters',
    };
  }
}
```

**Layer 5 - Field Widget:**
```dart
decoration: InputDecoration(
  labelText: 'Stock Symbol',
  errorText: error.fold(
    () => null,
    (err) => err.toUserMessage(),
  ),
)
```

### 7. Server Entity Composition (ADR-0025)

```dart
class Stock extends Equatable {
  const Stock({
    required this.id,            // Infrastructure: UUID
    required this.userId,        // Infrastructure: multi-tenant
    required this.createdAt,     // Infrastructure: audit
    required this.updatedAt,     // Infrastructure: audit
    required this.sharedStock,   // Domain: business logic
  });

  final String id;
  final int userId;
  final DateTime createdAt;
  final DateTime updatedAt;
  final domain.Stock sharedStock;

  // Delegate business logic
  domain.TickerSymbol get tickerSymbol => sharedStock.tickerSymbol;
  Option<domain.CompanyName> get name => sharedStock.name;
  // ...
}
```

Wrapping, not inheritance. Infrastructure fields ONLY in server entity. Business logic delegated.

### 8. Test as Specification

```dart
test('with typical watchlist names', () {
  final testDataList = fixtures.ValueObjectFixtures.watchlistNameTestDataList();
  for (final testData in testDataList) {
    final result = WatchlistName.create(testData);
    expect(result.isRight(), isTrue);
    expect(
      result.getOrElse((_) => throw Exception()).value,
      equals(testData),
    );
  }
});

test('for strings exceeding 100 characters', () {
  final longName = _generateTooLongName();
  final result = WatchlistName.create(longName);
  expect(result.isLeft(), isTrue);
  final error = result.swap().getOrElse((_) => throw Exception());
  expect(error, isA<WatchlistNameTooLong>());
});
```

### 9. Fixture Usage

```dart
class ValueObjectFixtures {
  static TickerSymbol tickerSymbol({String value = 'AAPL'}) {
    return TickerSymbol.create(value).toNullable()!;
  }

  static IList<TickerSymbol> tickerSymbolList({int count = 5}) {
    final tickers = <TickerSymbol>[];
    for (var i = 0; i < count && i < _validTickers.length; i++) {
      tickers.add(tickerSymbol(value: _validTickers[i]));
    }
    return tickers.lock;
  }
}
```

## Structured Observations (Recorder - Cycle 2)

### Code Examples Ranked by Teaching Value

**Highest Teaching Value:**
1. Five-Layer Validation Flow - complete architecture
2. Server Use Case (4-step Either chain) - orchestration pattern
3. Repository Implementation - boundary translation
4. Value Object Creation - constrained construction

**Medium Teaching Value:**
5. BLoC Pattern - Either with state management
6. Endpoint Boundary - Either to Exception
7. Server Entity Composition - infrastructure separation

### Pattern Chains

**Primary Chain: Value Object → Use Case → Repository → Endpoint**
1. Value Object creates Either<Error, ValueObject>
2. Use Case chains Either operations, maps errors
3. Repository catches exceptions, wraps in Either
4. Endpoint folds Either to exceptions

**Validation Chain: Domain → Use Case → BLoC → Extension → Widget**
1. Domain defines rules, returns Either
2. Use Case bridges to presentation
3. BLoC stores as Option<Error>
4. Extension maps to user message
5. Widget displays via fold()

**Error Flow Chain: Domain Error → Application Error → Exception**
1. Domain returns typed errors in Either
2. Use Case maps via switch
3. Endpoint maps to exceptions via fold + switch

### The Five-Layer Validation (Complete Picture)

| Layer | Location | Responsibility | Pattern |
|-------|----------|----------------|---------|
| 1 | Domain Value Object | Define validation rules | Private constructor + create() |
| 2 | Validation Use Case | Bridge to presentation | Call create(), return Either |
| 3 | BLoC State | Store errors reactively | Option<Error> field |
| 4 | Error Extensions | Map to user messages | Switch on error type |
| 5 | Field Widget | Display errors | fold() to errorText |

## What Surfaced in Dreaming (Cycle 2)

- **What surfaced:** The architecture is literally shaped by the AI collaboration constraint. This isn't "clean architecture that happens to work with AI." This is architecture that emerged *because* we're building with AI.

- **This rhymes with:** The Unix philosophy, but for AI collaboration. "Do one thing well" becomes "Each layer has one translation responsibility."

- **Hiding in plain sight:** Error messages are a layer of architecture, not an afterthought. The error extensions aren't "polish" - they're a *structural layer* separating "what went wrong" from "how to tell the user."

- **The story wants to be:** "How AI Forces You to Build Better Architecture" - not "AI helps with clean architecture." The real story: when you can't hold context, implicit must become explicit.

- **What makes this compelling:** The architecture documents itself through type signatures. `Either<DomainError, Email> validate(String input)` tells the whole story.

- **What surfaced:** Boundaries as translation points, not barriers. The repository is the Rosetta Stone between exception-world and Either-world.

- **What's actually being taught:** How to make implicit constraints explicit:
  - Private constructors make "only valid objects exist" explicit
  - Either makes "success and failure are equally important" explicit
  - Five layers make "validation has multiple concerns" explicit

- **The emotional hook:** The relief of not having to remember everything. The type system remembers. The layers remember. Trust in structure replaces anxiety about complexity.

---

## Integration

### What Must Illuminate the Article

1. **Constraint as Pedagogy** - Rigid rules make architecture impossible to misunderstand
2. **Boundaries as Curriculum** - Every boundary teaches a concept
3. **Tests as AI-First Documentation** - When CLAUDE.md is 368 lines and codebase is 150K
4. **Reference-Driven Development** - The 40KB CRUD reference as teaching artifact
5. **The Meta-Recursive Nature** - Building is teaching is learning

### The Core Truth

**Zenvestor is not a stock trading platform. It's a teaching environment that happens to trade stocks.** The architecture optimizes for AI comprehension and human learning, not just runtime execution.

### Article Frame

"How AI Forces You to Build Better Architecture"

When you can't rely on held context (in your head or the AI's), you're forced to make implicit things explicit:
- Private constructors with factory methods aren't "best practices" - they're the only way AI can reliably create valid objects
- The Either chain isn't "functional programming" - it's making error paths visible
- Type signatures become the communication protocol

---

*Scrying completed: 2025-12-21 21:00*
*Artifact: /home/pentaxis/src/aiandi/blog-pipeline/scrying/scry-2025-12-21-2100-zenvestor-architecture.md*
